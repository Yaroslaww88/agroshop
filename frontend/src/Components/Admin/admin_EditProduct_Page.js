import React, { Component, useState, useEffect } from 'react'
import {
    Card,
    CardImg,
    CardGroup,
    InputGroup,
    Input,
    Spinner
} from 'reactstrap'

import { getImagesUrlById, fetchProductById } from "../utils/utils"

const EditProduct = ({ match, ...props }) => {

    const [product, setProduct] = useState({})
    const [reload, setReload] = useState(false)
    const id = parseInt(match.params.id)
    const url = getImagesUrlById(id)
    console.log('images url', url)

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

    function getImageCards() {
        let cards = []
        for (let imageUrl of url) {
            cards.push((
                <Card>
                    <CardImg top width="10px" src={imageUrl} />
                </Card>
            ))
        }
        return cards
    }

    return (
        <>
            {product === undefined ? loading : 
                <div style={{padding: '50px', justifyContent: 'center'}}>
                    <h1>EDIT IMAGE</h1>
                    <CardGroup>
                        {getImageCards()}
                    </CardGroup>
                    <h1>EDIT DESCRIPTION</h1>
                    <InputGroup>
                        <Input placeholder={product.description} />
                    </InputGroup>
                </div>
            }
        </>
    );
}

export default EditProduct