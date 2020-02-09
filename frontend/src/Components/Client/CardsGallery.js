import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { Container, Row, Col } from 'reactstrap';

const CardsGallery = ({history, viewType, items}) => {

    const random = () => {
        return Math.random(10000);
    }

    const getRow = (arr = []) => {

        return (
            <Row key={random()}>
                {arr.map(el => {
                    if (!el.name) {
                        return <Col></Col>
                    } 
                    return <Col><ItemCard history={history} key={random()} allItemValue={el}/></Col>
                })}
            </Row>
        )
    }

    const getCards = (colNumber = 2) => {
        if (colNumber >= 2 && items.length >= 2) {

            let rowsArray = [];
            let itemsSelected = 0;

            for (let i = 0; i <= items.length - colNumber; i += colNumber) {
                let arr = items.slice(i, i + colNumber);
                rowsArray.push(getRow(arr));
                console.log(rowsArray)
                itemsSelected += colNumber;
            }

            if (items.length % colNumber !== 0) {

                let lastRow = items.slice(itemsSelected, items.length);

                while (lastRow.length < items.length - 1) {
                    lastRow.push({});
                }

                rowsArray.push(getRow(lastRow));
            }

            return rowsArray;
        } else {
            return items.map(el => <Col><ItemCard history={history} key={random()} type={1} allItemValue={el}/></Col>)
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
            {getGallery()}
        </div>
    );
}

CardsGallery.propTypes = {
    viewType: PropTypes.number,
    content: PropTypes.string,
}

export default CardsGallery;