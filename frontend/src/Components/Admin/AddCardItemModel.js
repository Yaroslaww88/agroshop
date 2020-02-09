import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AddCarditemForm from './AddItemCardForm'

const AddCarditemModel = ({onSubmit}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  /*let submit = (item) => {
    let itemToSubmit = {
        'desc': item.desc, 
        'title': item.title,
        'checked': item.checked
    }

    onSubmit(item);
    toggle();
  }*/

  return (
    <div>
        <Button color="info" onClick={toggle}>Add</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add item</ModalHeader>
            <ModalBody>
                <AddCarditemForm onSubmit={(item) => {onSubmit(item); toggle()}}/>
            </ModalBody>
        </Modal>
    </div>
);
}

export default AddCarditemModel;