import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap'
import AddItemCardForm from './AddItemCardForm'
import { getImagesUrlById } from '../utils'
import EditProductDropdown from './EditProductDropdown'

const AdminItemCard = ({ product, handleDropdownClick, ...props }) => {

    let title = product.title || 'Name is unavailable'
    let description = product.description || 'Description is unavailable'
    let available = product.available || 'In_stock is unavailable'
    let price = product.price || 'Price is not set'
    let id = product.id || -1

    const url = getImagesUrlById(id)

    function __handleDropdownClick (option) {
        handleDropdownClick(option, id)
    }

    return (
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0">
                <img className="header-img" src={url} alt="image"/>
            </div>
            <div class="card-block px-2">
                <CardTitle> {title} </CardTitle>
                <CardText> {description} </CardText>
                <EditProductDropdown
                    title='edit item'
                    handleDropdownClick={__handleDropdownClick}
                    {...props}
                />
            </div>
        </div>
    )
};

export default AdminItemCard;