import React, { useState, useEffect } from 'react'
import CardsGallery from './Gallery/CardsGallery'
import { Button, ButtonGroup, Container, Row } from 'reactstrap'
import { fetchAllProducts } from '../utils'

const HomePage = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function __fetchAllProducts() {
            let response = await fetchAllProducts()
            setProducts(response)
        }

        __fetchAllProducts()
    }, []);

    return (
        <Container>
            <CardsGallery products={products} {...props} />
        </Container>
    );
}

export default HomePage;