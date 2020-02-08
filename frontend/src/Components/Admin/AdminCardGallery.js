import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AdminItemCard from './AdminItemCard';
import { Container, Row, Col } from 'reactstrap';

const AdminCardsGallery = ({items, onDelete, onEdit}) => {

    const random = () => {
        return Math.random(10000);
    }

    const getCards = () => {
        return items.map(el => <Col><AdminItemCard key={random()} onDelete={onDelete} onEdit={onEdit} allItemValue={el}/></Col>)
    }

    const getGallery = () => {
        return getCards(1);
    } 

    return (
        <div>
            {getGallery()}
        </div>
    );
}

AdminCardsGallery.propTypes = {
    content: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default AdminCardsGallery;