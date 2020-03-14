import React, { useState, useEffect } from 'react';
import CardsGallery from './CardsGallery';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';

const HomePage = (props) => {

    const [items, setItems] = useState([]);
    const [viewType, setViewType] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('/api/products', {
                method: 'GET',
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
    }, []);

    return (
        <Container>
            <Row>
                <ButtonGroup className="ml-auto">
                    <Button color="primary" outline color="success" onClick={() => setViewType(0)} active={viewType === 0}>
                        <img src="./icons/square-menu.png"></img>
                    </Button>
                    <Button color="primary" outline color="success" onClick={() => setViewType(1)} active={viewType === 1}>
                        <img src="./icons/list-menu.png"></img>
                    </Button>
                </ButtonGroup>
            </Row>
            <Row>
                <CardsGallery {...props} viewType={viewType} items={items}/>
            </Row>
        </Container>
    );
}

export default HomePage;