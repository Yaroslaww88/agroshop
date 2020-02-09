import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AdditemCardForm = ({onSubmit}) => {

    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')
    const [checked, setChecked] = useState(true)

    return (
        <Form>
        <FormGroup>
            <Label for="title-id">Title</Label>
            <Input type="text" name="title" id="title-id" placeholder="enter a title" onChange={(e) => setTitle(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Label for="description-id">Description</Label>
            <Input type="textarea" name="description" id="description-id" className='form-textarea' onChange={(e) => setDesc(e.target.value)}/>
        </FormGroup>
        <FormGroup check>
            <Label check>
            <Input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>{' '}
                Available
            </Label>
        </FormGroup>
        <Button type="submit" onClick={(e) => {e.preventDefault(); onSubmit({desc, title, checked})}}>Submit</Button>
        </Form>
    );
}

export default AdditemCardForm;