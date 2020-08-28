import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Plus, DollarSign, Edit2 } from 'react-feather';

function WorkModal(props) {
    const [show, setShow] = useState(false);
    const [work, setWork] = useState({
        description: '',
        unit: 'Flat rate',
        amount: '0'
    })

  const handleClose = () => { 
      setShow(false)
  };

  const handleShow = () => { 
      setShow(true) 

      let obj = {}
      if (props.edit) {
        obj = {
            description: props.data.description,
            unit: props.data.unit,
            amount: props.data.amount
          }
      } else {
        obj = {
            description: '',
            unit: 'Flat Rate',
            amount: '0'
          }
      }

      setWork(obj)
  };

  const handleInputChange = event => {
    const { name } = event.target;
    
    setWork({
      ...work,
      [name]: event.target.value
    });
   }

   const save = () => {
       if (props.edit) {
            props.save(work, props.index)
       } else {
            props.save(work)
       }
     
        handleClose();
   }

  return (
    <>
        { props.edit ? <Edit2 onClick={handleShow} size={ 14 } /> : 
            <Button variant="primary" onClick={handleShow}>
                <Plus size={ 16 } />Add work
            </Button>
        }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><Plus /> Add Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" value={ work.description } onChange={ handleInputChange } />
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Charge By</Form.Label>
                <Form.Control as="select" name="unit" custom value={ work.unit } onChange={ handleInputChange } >
                  <option value="Flat Rate">Flat Rate</option>
                  <option value="Per Hour">Hour</option>
                  <option value="Per Item">Item</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control name="amount" type="text" value={ work.amount } onChange={ handleInputChange }  />
            </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ () => save() }>
            <DollarSign size={ 16 } /> { props.edit ? 'Update' : 'Save' }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkModal;