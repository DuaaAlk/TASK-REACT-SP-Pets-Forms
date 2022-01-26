import { useState } from 'react';
import petStore from '../petStore';
import PetUpdateModal from './PetUpdateModal';
import { Button } from 'react-bootstrap'

export default function PetItem(props) {
  const pet = props.pet;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petStore.handleAdopt(pet.id)}>Adopt
          </button>
          <Button variant="info" onClick={handleShow}>Update</Button>
          <PetUpdateModal show={show} handleClose={handleClose} pet={pet}/>
        </div>
      </div>
    </div>
  );
}
