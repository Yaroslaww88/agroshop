import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle, Row, Col, CardImgOverlay,
  NavLink
} from 'reactstrap'
import { getImagesUrlById } from '../../utils'

const ItemCard = ({ history, product }) => {

    let title = product.title || 'Name is unavailable'
    let description = product.description || 'Description is unavailable'
    let available = product.available || 'In_stock is unavailable'
    let price = product.price || 'Price is not set'
    let id = product.id || -1

    const url = getImagesUrlById(id)

    let openItem = () => {
      history.push(`/${id}`)
    }

    let getDescription = () => {
      if (description.length > 100) {
        return description.slice(0, 97) + '...'
      } else
        return description
    }

    return (
        <Card body outline color="success">
            <Row>
            <Col xs="4">
                <CardImg onClick={openItem} left className="header-img" src={url} alt="image" />
            </Col>
            <Col xs="6">
                <CardBody>
                    <CardTitle onClick={openItem} className="link"> 
                        {title}
                    </CardTitle>
                    <CardText> {getDescription()} </CardText>
                    <Button outline color="success" size="lg"> BUTTON </Button>
                </CardBody>
            </Col>
            </Row>
        </Card>
    )

}

export default ItemCard;