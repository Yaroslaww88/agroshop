import React, { useState, useEffect } from 'react'
import CardsGallery from './Gallery/CardsGallery'
import { Button, ButtonGroup, Container, Row } from 'reactstrap'
import { fetchAllProducts } from '../utils'
import GaleryViewToggler from './Gallery/GaleryViewToggler'
import SmallProductCard from './Gallery/SmallProductCard'
import BigProductCard from './Gallery/BigProductCard'

const HomePage = (props) => {

    const [products, setProducts] = useState([]);
    const [columnCount, setColumnCount] = useState(1)

    useEffect(() => {
        async function __fetchAllProducts() {
            let response = await fetchAllProducts()
            setProducts(response.products)
        }

        __fetchAllProducts()
    }, []);

    function getProductCards() {
        let productCards = []
        for (let product of products) {
            let productCard = columnCount === 3 ? 
                (<SmallProductCard product={product} {...props}/>) 
                : (<BigProductCard product={product} {...props}/>)
            productCards.push(productCard)
        }
        return productCards
    }

    function handleToggle() {
        if (columnCount === 1)
            setColumnCount(3)
        else
            setColumnCount(1)
    }

    return (
        <Container>
            <GaleryViewToggler handleToggle={handleToggle}/>
            <CardsGallery productCards={getProductCards()} columnCount={columnCount} {...props} />
        </Container>
    );
}

export default HomePage;