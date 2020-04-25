import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap'
import AddItemCardForm from './AddItemCardForm'
import { getImagesUrlById } from '../utils'

const AdminItemCard = ({ history, product, handleEdition, handleDeletion }) => {

    let title = product.title || 'Name is unavailable'
    let description = product.description || 'Description is unavailable'
    let available = product.available || 'In_stock is unavailable'
    let price = product.price || 'Price is not set'
    let id = product.id || -1

    const url = getImagesUrlById(id)

    // const edit = () => {
    //     if (id !== -1) {
    //         let item = {name, description, in_stock, id}

    //         console.log('item: ', item)

    //         onEdit(item)
    //     } else {
    //         console.log('AdminItemCard id is unavailable')
    //     }
    // }

    // const [showForm, setShowForm] = useState(false)

    // const onSumbitForm = (item) => {
    //     onSubmitEdit(item)
    // } 

    // const onEdit = () => {
    //     setShowForm(!showForm)
    // }

    return (
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0">
                <img className="header-img" src={url} alt="image"/>
            </div>
            <div class="card-block px-2">
                <CardTitle> {title} </CardTitle>
                <CardText> {description} </CardText>
                <Button onClick={handleDeletion}>X</Button>
                <Button onClick={handleEdition}>Edit</Button>
            </div>
        </div>
    )
};

export default AdminItemCard;