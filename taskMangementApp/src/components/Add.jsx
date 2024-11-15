import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import taskimg from '../assets/uploadTaskimg.png'
import { useState } from 'react';


const Add = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <div>
      <p className='btn btn-info' style={{ border: 'none' }} onClick={handleShow} > ADD</p>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex justify-content-evenly align-items-center '>
              <div >
                <img width={'200px'} src={taskimg} alt="" />
                <p>*Upload only the following file type (jpeg,jpg,png) here!!!</p>
              </div>
              <div>
                <div className="mb-2">
                  <input placeholder='Task Title' type="text" className="form-control pe-5" />
                </div>
                <div className="mb-2">
                  <input placeholder='Initial Date' type="text" className="form-control pe-5" />
                </div>
                <div className="mb-2">
                  <input placeholder='Final Date ' type="text" className="form-control pe-5" />
                </div>
                <div className="mb-2">
                  <input placeholder='Status ' type="text" className="form-control pe-5" />
                </div>
                <div className="mb-2">
                  <input placeholder='Progress Percentage ' type="text" className="form-control" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='d-flex flex-column justify-content-evenly align-items-center'>
            <div className="mb-2 w-100">
              <input placeholder=' Task Description ' type="text" className="form-control pb-5" />
            </div>
            <div>
              <Button variant="secondary" onClick={handleClose} className='mx-2'>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose} className='mx-2'>
                Save
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add