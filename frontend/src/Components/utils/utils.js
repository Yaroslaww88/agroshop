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

function isValidPathForID (path, id) {
    let parsed = path.split('/')
    if (parseInt(parsed[1]) === id)
        return true
    else
        return false
}

function importAll(r, id) {
    let files = []
    for (let file of r.keys()) {
        if (isValidPathForID(file, id))
            files.push(r(file))
    }
    return files
}

export function getImagesUrlById(id) {
    let files = importAll(require.context('../../../public/img/', true, /.png$/), id)
    console.log('files', files)
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