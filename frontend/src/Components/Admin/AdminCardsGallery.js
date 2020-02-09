import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AdminItemCard from './AdminItemCard';
import { Container, Row, Col } from 'reactstrap';

const AdminCardsGallery = ({items, onDelete, onSubmitEdit}) => {

    const random = () => {
        return Math.random(10000);
    }

    const getCards = () => {
        return items.map(el => <Col><AdminItemCard key={random()} onDelete={onDelete} onSubmitEdit={onSubmitEdit} allItemValue={el}/></Col>)
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
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default AdminCardsGallery;