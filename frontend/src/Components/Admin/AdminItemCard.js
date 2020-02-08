import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, ButtonToggle
} from 'reactstrap';

const ItemCard = ({allItemValue, onDelete, onEdit}) => {

    let title = allItemValue.name || 'Title is unavailable'
    let content = allItemValue.description || 'Content is unavailable'
    let id = allItemValue._id || '-1'

    return (
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0">
                <img className="header-img" src="../img/1ycO6.jpg" alt=""/>
            </div>
            <div class="card-block px-2">
                <CardTitle> {title} </CardTitle>
                <CardText> {content} </CardText>
                <Button onClick={() => onDelete(id)}>X</Button>
                <Button onClick={onEdit}>Edit</Button>
            </div>
        </div>
    )
  
};

ItemCard.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default ItemCard;