import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const AdditemCardForm = ({ onSubmit }) => {

    const [product, setProduct] = useState({})
    const [image, setImage] = useState('')
    const { title = '', description = '', available = false } = product

    const submit = () => {
        console.log('image', image)
        onSubmit(product, image);
    }

    const handleImageUpload = (e) => {
        e.preventDefault()
        setImage(e.target.files[0])
        console.log(e.target.files)
    }

    const handleProductChange = (e) => {
        let { name, value } = e.target
        // Because checkbox return 'on' in e.target.value
        if (name === 'available') {
            value = e.target.checked
        }
        setProduct({
            ...product,
            [name]: value
        })
    }

    useEffect(() => {
       console.log('useEffect', available) 
    }, [available])

    return (
        <Form>
            <FormGroup row>
                <Label for="file-id" sm={2}>File</Label>
                <Col sm={10}>
                    <Input 
                        type="file" 
                        name="file" 
                        id="file-id" 
                        onChange={handleImageUpload}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label for="name-id">Name</Label>
                <Input 
                    type="text" 
                    name="title" 
                    id="title-id" 
                    placeholder="enter a name" 
                    value={title} 
                    onChange={handleProductChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="description-id">Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    id="description-id" 
                    className='form-textarea' 
                    value={description} 
                    onChange={handleProductChange}
                />
            </FormGroup>
            <FormGroup check>
                <Input 
                    type="checkbox" 
                    name="available" 
                    id="available-id" 
                    onChange={handleProductChange}
                />
                <Label for="available-id" check>Available</Label>
            </FormGroup>
            <Button type="button" onClick={submit}>
                Submit
            </Button>
        </Form>
    );
}

export default AdditemCardForm;