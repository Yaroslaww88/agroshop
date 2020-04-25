exports.fetchAllProducts = async function fetchAllProducts() {
    let response = await fetch('/api/products/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    try {
        let data = await response.json()
        return data.products
    } catch (err) {
        throw err
    }
}

function importAll(r) {
    return r.keys().map(r);
}

exports.getImagesUrlById = function getImagesUrlById(id) {
    let files = importAll(require.context('../../public/img/', true, /.png$/))
    return files
}

/**
 * @param {Integer} id
 */
exports.fetchProductById = async function fetchProductById(id) {
    let response = await fetch(`/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    try {
        let data = await response.json()

        return data.product
    } catch (err) {
        throw err
    }
}

/**
 * @param {String} login
 * @param {String} password
 */
exports.fetchAdminLogin = async function fetchAdminLogin(login, password) {
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

    try {
        let data = await response.json()
        if (!data.error) {
            return ({status: 'success', error: ''})
        } else {
            throw new Error(data.error)
        }
    } catch (err) {
        throw err
    }
}

exports.fetchAdminLogout = async function fetchAdminLogout() {
    let response = await fetch('/api/admin/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    try {
        let data = await response.json()
        if (!data.error) {
            return ({status: 'success', error: ''})
        } else {
            throw new Error(data.error)
        }
    } catch (err) {
        throw err
    }
}