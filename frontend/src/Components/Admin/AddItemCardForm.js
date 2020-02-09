import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const AdditemCardForm = ({initDescription = '', initName = '', initInStock = true, onSubmit}) => {

    const [description, setDescription] = useState(initDescription)
    const [name, setName] = useState(initName)
    const [in_stock, setInStock] = useState(initInStock)
    const [image, setImage] = useState('')

    const submit = () => {
        let item = {
            name,
            description,
            in_stock
        }

        if (image !== '')
            item.image = image

        onSubmit(item);
    }

    return (
        <Form>
            <FormGroup row>
                <Label for="file-id" sm={2}>File</Label>
                <Col sm={10}>
                    <Input type="file" name="file" id="file-id" onChange={(e) => {console.log('e.target.files: ', e.target.files); setImage(e.target.files[0])}}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Label for="name-id">Name</Label>
                <Input type="text" name="name" id="name-id" placeholder="enter a name" value={name} onChange={(e) => setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="description-id">Description</Label>
                <Input type="textarea" name="description" id="description-id" className='form-textarea' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" checked={in_stock} onChange={() => setInStock(!in_stock)}/>{' '}
                    In stock
                </Label>
            </FormGroup>
            <Button type="submit" onClick={(e) => {e.preventDefault(); submit()}}>Submit</Button>
        </Form>
    );
}

export default AdditemCardForm;