import { parseResponse } from '../utils'

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