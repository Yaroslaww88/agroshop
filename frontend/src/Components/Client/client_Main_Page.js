import React, { useState, useEffect } from 'react'
import { 
    Container, 
} from 'reactstrap'

import GaleryViewToggler from './Gallery/share_GaleryViewToggler_Component'
import SmallProductCard from './Gallery/client_SmallProductCard_Component'
import BigProductCard from './Gallery/client_BigProductCard_Component'
import CardsGallery from './Gallery/share_CardsGallery_Component'

import { fetchAllProducts } from '../utils/utils'

const MainPage = (props) => {

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

export default MainPage;