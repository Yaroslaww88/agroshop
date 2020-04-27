import React from 'react'
import {
  Card,
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button
} from 'reactstrap'
import { getImagesUrlById } from '../../utils/utils.js'

const SmallProductCard = ({ history, product }) => {

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
        <Card>
            <CardImg onClick={openItem} left className="header-img" src={url} alt="image" />
            <CardBody>
                <CardTitle onClick={openItem}> {title} </CardTitle>
                <CardText> {getDescription()} </CardText>
                <Button> BUTTON </Button>
            </CardBody>
        </Card>
    )
}

export default SmallProductCard