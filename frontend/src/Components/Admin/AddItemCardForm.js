import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const AdditemCardForm = ({ onSubmit }) => {

    const [product, setProduct] = useState({})
    const [image, setImage] = useState('')

    const submit = () => {
        onSubmit(product, image);
    }

    const handleImageUpload = (e) => {
        e.preventDefault()
        setImage(e.target.files[0])
    }

    const handleProductChange = (e) => {
        e.preventDefault()
        console.log(e.target.value, e.target.name)
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const { title = '', description = '', available = '' } = product

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
                <Label check>
                <Input 
                    type="checkbox" 
                    checked={available} 
                    onChange={handleProductChange}
                />
                    Available
                </Label>
            </FormGroup>
            <Button type="button" onClick={submit}>
                Submit
            </Button>
        </Form>
    );
}

export default AdditemCardForm;