import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import GaleryViewToggler from './GaleryViewToggler'
import BigProductCard from './BigProductCard'
import SmallProductCard from './SmallProductCard'

const CardsGallery = (props) => {

    const [viewType, setViewType] = useState(0)

    let { products } = props

    console.log('Products: ', products)

    const random = () => {
        return Math.random(10000);
    }

    const getRow = (arr = []) => {
        return (
            <Row key={random()}>
                {arr.map(el => {
                    if (!el.title) {
                        return <Col></Col>
                    } 
                    return (
                        <Col className="card-col" xs={`${12/arr.length}`}>
                            <SmallProductCard 
                                key={random()} 
                                product={el} 
                                {...props} 
                            />
                        </Col>
                    )
                })}
            </Row>
        )
    }

    const getCards = (colNumber = 1) => {
        if (colNumber >= 2 && products.length >= colNumber) {

            let rowsArray = [];
            let productsSelected = 0;

            for (let i = 0; i <= products.length - colNumber; i += colNumber) {
                let arr = products.slice(i, i + colNumber);
                rowsArray.push(getRow(arr));
                productsSelected += colNumber;
            }

            if (products.length % colNumber !== 0) {

                let lastRow = products.slice(productsSelected, products.length);

                while (lastRow.length < colNumber) {
                    lastRow.push({});
                }

                rowsArray.push(getRow(lastRow));
            }

            return rowsArray;
        } else {
            return products.map(el => {
                return (
                    <Col className="card-col" >
                        <BigProductCard 
                            key={random()}
                            product={el} 
                            {...props} 
                        />
                    </Col>
                )
            })
        }
    }

    const getGallery = () => {
        if (viewType === 0) {
            return getCards(3);
        } else {
            return getCards(1);
        }
    } 

    return (
        <div>
            <GaleryViewToggler
                handleToggle = {(type) => setViewType(type)}
            />
            {getGallery()}
        </div>
    );
}

CardsGallery.propTypes = {
    viewType: PropTypes.number,
    content: PropTypes.string,
}

export default CardsGallery;