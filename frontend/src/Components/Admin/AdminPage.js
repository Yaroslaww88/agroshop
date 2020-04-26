import React, { Component, useState, useEffect } from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import CardsGallery from '../Client/Gallery/CardsGallery'
import AddCardItemModel from './AddCardItemModel'
import { fetchAdminLogout, fetchAllProducts } from '../utils'
import { deleteOneProductById, postOneProduct } from './adminUtils'
import AdminItemCard from './AdminItemCard'
import AdminHeader from './AdminHeader'

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

    const { history, handleLogout } = props 

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

    let postItem = async (product, image) => {
        console.log('send images', image)
        try {
            await postOneProduct(product, image)
            setReload(!reload)
        } catch(err) {

        }
    } 

    async function handleDeleting(id) {
        console.log('DELETE', id)
        try {
            await deleteOneProductById(id)
            setReload(!reload)
        } catch(err) {
            
        }
    }

    function handleEditing(id) {
        history.push(`/admin/${id}`)
    }

    function handleDropdownClick(dropdownOption, id) {
        switch (dropdownOption) {
            case 'edit':
                handleEditing(id)
                break
            case 'delete':
                handleDeleting(id)
                break
            default:
                console.error(`Unexpextable dropdown option: ${dropdownOption}`)
        }
    }

    function getDropdownOptions() {
        let options = ['edit', 'delete']
        return options
    }

    function getProductCards() {
        let productCards = []
        console.log(products)
        for (let product of products) {
            let productCard = (<AdminItemCard 
                                    product={product}
                                    handleDropdownClick={handleDropdownClick}
                                    options={getDropdownOptions()}
                                    {...props}/>)
            productCards.push(productCard)
        }
        return productCards
    }

    return (
        <>
            <Container>
                <AdminHeader handleLogout={handleLogout}/>
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