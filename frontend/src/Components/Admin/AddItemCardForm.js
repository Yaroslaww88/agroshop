import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AdditemCardForm = ({initDescription = '', initName = '', initInStock = true, onSubmit}) => {

    const [description, setDescription] = useState(initDescription)
    const [name, setName] = useState(initName)
    const [in_stock, setInStock] = useState(initInStock)

    const submit = () => {
        let item = {
            name,
            description,
            in_stock
        }

        onSubmit(item);
    }

    return (
        <Form>
            <FormGroup>
                <Label for="name-id">Name</Label>
                <Input type="text" name="name" id="name-id" placeholder="enter a name" onChange={(e) => setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="description-id">Description</Label>
                <Input type="textarea" name="description" id="description-id" className='form-textarea' onChange={(e) => setDescription(e.target.value)}/>
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