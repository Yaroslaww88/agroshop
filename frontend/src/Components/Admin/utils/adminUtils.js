import { parseResponse } from '../../utils/utils'

export async function deleteOneProductById(id) {
    let response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    return parseResponse(response)
}

export async function postOneProduct(product, image) { 
    let formData = new FormData()
    formData.append('product', JSON.stringify(product))
    console.log('ímage to send', image)
    if (image) {
        formData.append('image', image)
    }

    let response = await fetch(`/api/products/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            //'Content-Type': undefined,
            //'boundary': 'boundary' 
        },
        body: formData
    })

    return parseResponse(response)
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