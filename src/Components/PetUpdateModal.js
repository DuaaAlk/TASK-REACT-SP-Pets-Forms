import React from 'react';
import { useState } from 'react';
import petStore from '../petStore';
import { Button, Modal, Form } from 'react-bootstrap';

const PetUpdateModal = ( {show, handleClose, pet} ) => {

    const [updatedPet, setUpdatedPet] = useState(pet);


    const handleUpdate = (event) => {
        setUpdatedPet({...pet,[event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        petStore.updatePet(updatedPet);
        handleClose();
    }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="text" placeholder={updatedPet.name} onChange={handleUpdate}/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Type:</Form.Label>
                <Form.Control name="type" type="text" placeholder={updatedPet.type} onChange={handleUpdate}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image url:</Form.Label>
                <Form.Control name="image" type="text" placeholder={updatedPet.image} onChange={handleUpdate}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PetUpdateModal;
