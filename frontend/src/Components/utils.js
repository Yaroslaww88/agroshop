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