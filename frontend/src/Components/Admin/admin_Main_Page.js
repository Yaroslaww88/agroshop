import React, { useState, useEffect } from 'react'
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap'
import CardsGallery from '../Client/Gallery/share_CardsGallery_Component'
import AddProductModel from './admin_AddProductModel_Component'
import { fetchAllProducts } from '../utils/utils'
import { deleteOneProductById, postOneProduct } from './utils/adminUtils'
import ProductCard from './admin_ProductCard_Component'
import Header from './admin_Header_Component'

const AdminPage = (props) => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const __fetchProducts = async () => {
            try {
                let response = await fetchAllProducts()
                setProducts(response.products)
            } catch(err) {
            }
        }

        __fetchProducts()
    }, [reload])

    const { history } = props 

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
        history.push(`/admin/edit/${id}`)
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
        console.log('get cards...')
        let productCards = []
        console.log(products)
        for (let product of products) {
            let productCard = (<ProductCard 
                                    product={product}
                                    handleDropdownClick={handleDropdownClick}
                                    options={getDropdownOptions()}
                                    {...props}/>)
            productCards.push(productCard)
        }
        return productCards
    }

    return (
        <Container>
            <Header {...props}/>
            <Row>
                <Col>
                    <AddProductModel onSubmit={postItem}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardsGallery productCards={getProductCards()} columnCount={1} {...props}/>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminPage;