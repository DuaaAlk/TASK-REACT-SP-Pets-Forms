import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import petStore from '../petStore';

const PetCreateModal = ( {show, handleClose} ) => 
{   
    const [pet, setPet] = useState({ name:"" , type:"" , image:"" });

    function handleChange (event){
       setPet({...pet,[event.target.name]: event.target.value});
    }

    function handleSubmit (event){
        event.preventDefault();
        petStore.addPet(pet);
        handleClose();
    }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter pet's name" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select enabled name="type" onChange={handleChange}>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Bird</option>
                    <option>Rabbit</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image url:</Form.Label>
                <Form.Control name="image" type="text" placeholder="Enter image url" onChange={handleChange}/>
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

export default PetCreateModal;
