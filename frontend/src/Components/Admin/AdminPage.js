import React, { Component, useState, useEffect } from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import CardsGallery from '../Client/Gallery/CardsGallery'
import AddCardItemModel from './AddCardItemModel'
import { fetchAdminLogout, fetchAllProducts } from '../utils'
import { deleteOneProductById, postOneProduct } from './adminUtils'
import AdminItemCard from './AdminItemCard'

const AdminPage = (props) => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const _fetchProducts = async () => {
            try {
                let products = await fetchAllProducts()
                setProducts(products.products)
            } catch(err) {
            }
        }

        _fetchProducts()
    }, [reload])

    let logout = () => {
        props.handleLogout();
    }

    // let deleteItem = async (id) => {
    //     try {
    //         await deleteOneProductById(id)
    //         setReload(!reload)
    //     } catch(err) {
            
    //     }
    // }

    // let editItem = async (item) => {

    //     let formData = new FormData()

    //     formData.append('name', item.name)
    //     formData.append('description', item.description)
    //     formData.append('in_stock', item.in_stock)
    //     if (item.image) {
    //         formData.append('image', item.image)
    //     }

    //     let response = await fetch(`/api/products/${item.id}`, {
    //         method: 'PUT',
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json',
    //             //'Content-Type': 'multipart/form-data',
    //         },
    //         body: formData
    //     })

    //     try {
    //         let data = await response.json()

    //         console.log('data: ', data)

    //         setReload(!reload)
    //     } catch (ex) {

    //     }
    // }

    let postItem = async (product) => {
        try {
            await postOneProduct(product)
            setReload(!reload)
        } catch(err) {

        }
    } 

    let handleDeletion = () => {
        console.log('DELETED')
    }

    
    let handleEdition = () => {
        console.log('EDITED')
    }

    function getProductCards() {
        let productCards = []
        console.log(products)
        for (let product of products) {
            let productCard = (<AdminItemCard 
                                    product={product}
                                    handleEdition={handleEdition}
                                    handleDeletion={handleDeletion} 
                                    {...props}/>)
            productCards.push(productCard)
        }
        return productCards
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello from admin</h1>
                    </Col>
                    <Col>
                        <Button onClick={logout}>Log out</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddCardItemModel onSubmit={postItem}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardsGallery productCards={getProductCards()} columnCount={1}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminPage;