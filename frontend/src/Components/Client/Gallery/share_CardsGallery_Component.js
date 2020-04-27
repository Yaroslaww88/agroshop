import React from 'react'
import { Row, Col } from 'reactstrap'

const CardsGallery = (props) => {

    let { productCards, columnCount } = props

    const random = () => {
        return Math.random(10000);
    }

    const getRow = (arr = []) => {
        return (
            <Row key={random()}>
                {arr.map(productCard => {
                    return (
                        <Col className="card-col" xs={`${12/arr.length}`}>
                            {productCard}
                        </Col>
                    )
                })}
            </Row>
        )
    }

    const getCards = (colNumber = 1) => {
        if (colNumber >= 2 && productCards.length >= colNumber) {

            let rowsArray = [];
            let productsSelected = 0;

            for (let i = 0; i <= productCards.length - colNumber; i += colNumber) {
                let arr = productCards.slice(i, i + colNumber);
                rowsArray.push(getRow(arr));
                productsSelected += colNumber;
            }

            if (productCards.length % colNumber !== 0) {

                let lastRow = productCards.slice(productsSelected, productCards.length);

                while (lastRow.length < colNumber) {
                    lastRow.push({});
                }

                rowsArray.push(getRow(lastRow));
            }

            return rowsArray;
        } else {
            return productCards.map(productCard => {
                return (
                    <Col className="card-col" >
                        {productCard}
                    </Col>
                )
            })
        }
    }

    return (
        <div>
            {getCards(columnCount)}
        </div>
    );
}

export default CardsGallery