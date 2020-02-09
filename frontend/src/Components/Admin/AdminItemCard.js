import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap'
import AddItemCardForm from './AddItemCardForm'

const ItemCard = ({allItemValue, onDelete, onSubmitEdit}) => {

    let name = allItemValue.name || 'Name is unavailable'
    let description = allItemValue.description || 'Description is unavailable'
    let in_stock = allItemValue.in_stock || 'In_stock is unavailable'
    let id = allItemValue._id || -1

    const edit = () => {
        if (id !== -1) {
            let item = {name, description, in_stock, id}

            onEdit(item)
        } else {
            console.log('AdminItemCard id is unavailable')
        }
    }

    const [showForm, setShowForm] = useState(false)

    const onSumbitForm = (item) => {
        onSubmitEdit(item)
    } 

    const onEdit = () => {
        setShowForm(!showForm)
    }

    return (
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0">
                <img className="header-img" src="../img/1ycO6.jpg" alt=""/>
            </div>
            <div class="card-block px-2">
                <CardTitle> {name} </CardTitle>
                <CardText> {description} </CardText>
                <Button onClick={() => onDelete(id)}>X</Button>
                <Button onClick={onEdit}>Edit</Button>
                {showForm === true ? 
                    <AddItemCardForm initDescription={description} initName={name} initInStock={in_stock} onSubmit={onSumbitForm}/> 
                : null}
            </div>
        </div>
    )
  
};

ItemCard.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default ItemCard;