import React, { Component, useState, useRef } from 'react'
import {
    Card,
    CardImg,
    CardColumns,
    InputGroup,
    Input,
    Spinner,
    Button,
    InputGroupAddon,
    InputGroupText,
    Label,
    FormGroup,
    Row,
    ModalBody,
    ModalHeader,
    Modal,
    ModalFooter
} from 'reactstrap'
import './admin_EditProductGallery.css'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const EditProductGallery = ({ url, handleDeletion }) => {

    const [modal, setModal] = useState(false)
    const [deletedCards, setDeletedCards] = useState([])
    const [status, setStatus] = useState(null)
    const [lastToDelete, setLastToDelete] = useState(null)

    const toggle = () => setModal(!modal)

    function handleClick(e) {
        setLastToDelete(e.target.getAttribute('id'))
        toggle()
    }

    function __handleDeletion() {
        handleDeletion(lastToDelete)
        if (lastToDelete) {
            setDeletedCards([...deletedCards, lastToDelete])
            setLastToDelete(null)
        }
        toggle()
    }

    function getImageCards() {
        let cards = []
        for (let [key, {url : imageUrl} ] of url) {
            cards.push((
                <Card 
                    key={key} 
                    id={key}
                    className='card' 
                    style={{backgroundColor: deletedCards.includes(key.toString()) && 'black'}} 
                    onClick={handleClick}
                >
                    <CardImg 
                        id={key}
                        style={{maxWidth: '100%', padding: '30px', opacity: deletedCards.includes(key.toString()) && '0'}} 
                        src={imageUrl} 
                    />
                    <div class="overlay" id={key}>
                        <a href="#" class="icon" title="User Profile">
                            <i id={key} class="fas fa-trash-alt"></i>
                        </a>
                    </div>
                </Card>
            ))
        }
        return cards
    }
    
    return (
        <div>
             <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Confirm action</ModalHeader>
                    <ModalBody>
                        Do you want to delete this image?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={__handleDeletion}>Delete</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
            </Modal>
            <h1>
                Want to update a product?
            </h1>
            <hr
                style={{height: '10px',  backgroundColor: 'black'}} 
            />
            <h1>
                images
            </h1>
            <CardColumns style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                maxWidth: '100%'
            }}>
                {getImageCards()}
            </CardColumns>
        </div>
    )
}

export default EditProductGallery