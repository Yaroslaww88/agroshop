import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';
import { fetchProductById } from '../utils'

const ItemPageComponent = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        async function __fetchProductById() {
            let response = await fetchProductById(props.match.params.id)
            setProduct(response)
            console.log(response)
        }

        __fetchProductById()
    }, []);

    let title = product.title || 'Name is unavailable'
    let description = product.description || 'Description is unavailable'
    let available = product.available || 'In_stock is unavailable'
    let price = product.price || 'Price is not set'
    let id = product.id || -1

    return (

        <Container>
            <Row>
                <Col>
                    <h1>{title}</h1>
                    <h1>{description}</h1>
                    <h1>{available}</h1>
                    <h1>{price}</h1>
                    <h1>{id}</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemPageComponent;