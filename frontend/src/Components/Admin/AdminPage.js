import React, { Component, useState, useEffect } from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import AdminCardsGallery from './AdminCardGallery'

const AdminPage = (props) => {

    const [items, setItems] = useState([])

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
    }, [])

    let logout = () => {
        props.onLogOut();
    }

    let deleteItem = async (id) => {
        console.log('item id: ', id)
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


        } catch (ex) {

        }
    }

    let editItem = () => {
        
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
                        <AdminCardsGallery onDelete={deleteItem} onEdit={editItem} items={items} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminPage;