import React, { Component, useState, useEffect } from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import AdminCardsGallery from './AdminCardGallery'
import AddCardItemModel from './AddCardItemModel'

const AdminPage = (props) => {

    const [items, setItems] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('http://localhost:8000/api/products', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            try {
                let data = await response.json()
                console.log(data.products)

                setItems(data.products)
            } catch (ex) {
                console.log('error: ', ex)
            }
        }

        fetchData()
    }, [reload])

    let logout = () => {
        props.onLogOut();
    }

    let deleteItem = async (id) => {
        let response = await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        try {
            let data = await response.json()
            setReload(!reload)
        } catch (ex) {

        }
    }

    let editItem = () => {
        
    }

    let postItem = async (item) => {

        let name = item.title
        let description = item.desc
        let in_stock = item.checked

        let products = {
            "products": [{name, description, in_stock}]
        }

        console.log(products)
        //products = JSON.stringify(products)

        let response = await fetch(`http://localhost:8000/api/products/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products)
        })

        try {
            let data = await response.json()
            setReload(!reload)
        } catch (ex) {

        }
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
                        <AddCardItemModel onSubmit={(item) => postItem(item)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AdminCardsGallery onDelete={deleteItem} onEdit={editItem} items={items} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminPage;