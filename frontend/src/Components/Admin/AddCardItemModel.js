import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AddCarditemForm from './AddItemCardForm'

const AddCarditemModel = (props) => {

  const [modal, setModal] = useState(false);

  const { onSubmit } = props

  const toggle = () => setModal(!modal);

  let submit = (...args) => {
    onSubmit(...args);
    toggle();
  }

  return (
    <div>
        <Button color="info" onClick={toggle}>Add</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add item</ModalHeader>
            <ModalBody>
                <AddCarditemForm onSubmit={submit}/>
            </ModalBody>
        </Modal>
    </div>
);
}

export default AddCarditemModel;