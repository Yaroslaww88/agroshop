/**
 * @param {*} response
 * @param {String} whatToReturn - what field add to result(if needed)
 */
export async function parseResponse(response, whatToReturn = '') {
    try {
        let data = await response.json()
        if (data.status === 'success') {
            let result = {
                status: 'success',
                error: ''
            }
            if (whatToReturn) {
                result[whatToReturn] = data[whatToReturn]
            }
            return result
        } else {
            throw new Error(data.error)
        }
    } catch(err) {
        /*let result = {
            status: 'unsuccess',
            error: err
        }
        return result*/
        throw err
    }
}

export async function fetchAllProducts() {
    let response = await fetch('/api/products/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    return parseResponse(response, 'products')
}

function importAll(r) {
    return r.keys().map(r);
}

export function getImagesUrlById(id) {
    let files = importAll(require.context('../../public/img/', true, /.png$/))
    return files
}

/**
 * @param {Integer} id
 */
export async function fetchProductById(id) {
    let response = await fetch(`/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    return parseResponse(response, 'product')
}

/**
 * @param {String} login
 * @param {String} password
 */
export async function fetchAdminLogin(login, password) {
    let encode = btoa(`${login}:${password}`)

    let response = await fetch('/api/admin/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encode}`
        }
    })

    return parseResponse(response)
}

export async function fetchAdminLogout() {
    let response = await fetch('/api/admin/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    return parseResponse(response)
}

/*parseResponse = this.parseResponse.bind(this)
fetchAllProducts = this.fetchAllProducts.bind(this)
fetchProductById = this.fetchProductById.bind(this)
fetchAdminLogin = this.fetchAdminLogin.bind(this)
fetchAdminLogout = this.fetchAdminLogout.bind(this)*/
