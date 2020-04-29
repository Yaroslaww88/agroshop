import React, { Component, useState, useEffect } from 'react'
import {
    Input,
    Spinner,
    Button,
    Label,
    FormGroup
} from 'reactstrap'

import EditProductGallery from './admin_EditProductGallery_Component'

import { getImagesUrlById, fetchProductById } from "../utils/utils"
import { updateOneProduct } from './utils/adminUtils'

const EditProduct = ({ match, ...props }) => {

    const [product, setProduct] = useState({})
    const [reload, setReload] = useState(false)
    const id = parseInt(match.params.id)
    const [deletedImages, setDeletedImages] = useState([])

    useEffect(() => {
        async function __fetchProductById(id) {
            try {
                let response = await fetchProductById(id)
                console.log(response)
                setProduct(response.product)
            } catch(err) {

            }
        }

        __fetchProductById(id)
    }, [reload])

    const loading = (function loading() {
        return (
            <div>
                <Spinner 
                    color="primary" 
                    size="30px"
                />
            </div>
        )
    })()

    const handleProductChange = (e) => {
        let { name, value } = e.target
        // Because checkbox return 'on' in e.target.value
        if (name === 'available') {
            value = e.target.checked
        }
        setProduct({
            ...product,
            [name]: value
        })
    }

    async function handleProductSubmit() {
        try {
            await updateOneProduct(product, null, deletedImages)
            setReload(!reload)
        } catch(err) {

        }
    }

    /**
     * Get pairs [uniq key, url of image]
     */
    const url = (function getUrlWithKeys() {
        let url = []
        let key = 0
        let urls = getImagesUrlById(id)
        for (let u of urls) {
            url.push([key++, u])
        } 
        return url
    })()

    function handleDeletion(key) {
        let imageToDelete = null
        //find id of [key === key, anything]
        for (let i = 0; i < url.length; i++) {
            if (url[i][0] == key) {
                imageToDelete = url[i][1].filename
                break
            }
        }
        if (imageToDelete !== null) {
            setDeletedImages([...deletedImages, imageToDelete])
            console.log(deletedImages)
        }
    }

    const { title = '', description = '', price = 0, available = false } = product

    return (
        <>
            {product === undefined ? loading : 
                <div style={{padding: '50px', justifyContent: 'center'}}>

                    <EditProductGallery
                        url={url}
                        handleDeletion={handleDeletion}
                    />

                    <FormGroup>
                        <Label for="name-id">Name</Label>
                        <Input 
                            type="text" 
                            name="title" 
                            id="title-id" 
                            placeholder="enter a name" 
                            value={title} 
                            onChange={handleProductChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description-id">Description</Label>
                        <Input 
                            type="textarea" 
                            name="description" 
                            id="description-id" 
                            className='form-textarea' 
                            value={description} 
                            onChange={handleProductChange}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input 
                            type="checkbox" 
                            name="available" 
                            id="available-id" 
                            checked={available}
                            onChange={handleProductChange}
                        />
                        <Label for="available-id" check>Available</Label>
                    </FormGroup>

                    <Button 
                        color="primary"
                        onClick={handleProductSubmit}
                    >
                        Update product
                    </Button>

                </div>
            }
        </>
    );
}

export default EditProduct