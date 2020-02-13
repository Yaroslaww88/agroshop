import React, { useState, useEffect } from 'react';
import CardsGallery from './CardsGallery';
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';

const ItemPageComponent = (props) => {

    const [item, setItem] = useState({})

    console.log(props.match)

    useEffect(() => {

        console.log(props)

        const fetchData = async () => {
            let response = await fetch(`http://localhost:8000/api/products/${props.match.params.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            try {
                let data = await response.json()

                setItem(data.products)
            } catch (ex) {
                console.log('error: ', ex)
            }
        }

        fetchData()
    }, []);

    const {name, description, in_stock, id} = item

    return (

        <Container>
            <Row>
                <Col>
                    <h1>{name}</h1>
                    <h1>{description}</h1>
                    <h1>{in_stock}</h1>
                    <h1>{id}</h1>
                </Col>
            </Row>
        </Container>
    );

    return (<h1>1</h1>)
}

export default ItemPageComponent;