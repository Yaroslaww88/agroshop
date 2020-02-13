import React, { Component, useState, useEffect } from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import AdminCardsGallery from './AdminCardsGallery'
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

    let editItem = async (item) => {

        let formData = new FormData()

        formData.append('name', item.name)
        formData.append('description', item.description)
        formData.append('in_stock', item.in_stock)
        if (item.image) {
            formData.append('image', item.image)
        }

        let response = await fetch(`http://localhost:8000/api/products/${item.id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',
            },
            body: formData
        })

        try {
            let data = await response.json()

            console.log('data: ', data)

            setReload(!reload)
        } catch (ex) {

        }
    }

    let postItem = async (item) => {

        let formData = new FormData()

        formData.append('name', item.name)
        formData.append('description', item.description)
        formData.append('in_stock', item.in_stock)

        if (item.image) {
            formData.append('image', item.image)
        }

        let response = await fetch(`http://localhost:8000/api/products/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'application/json',
            },
            body: formData
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
                        <AdminCardsGallery onDelete={deleteItem} onSubmitEdit={editItem} items={items} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminPage;