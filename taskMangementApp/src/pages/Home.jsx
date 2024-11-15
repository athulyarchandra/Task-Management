import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImg from '../assets/homeimg.png'
import TaskCard from '../components/TaskCard';
import Profile from '../assets/profilepic.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import profileImg from '../assets/uploadTaskimg.png'







const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <div style={{ minHeight: 'auto', width: '100%', backgroundColor: 'white' }} className="d-flex justify-content-center align-items-center">
                <div>
                    <Container className='mt-5 d-flex justify-content-center align-items-center' style={{ height: '100vh' }} >
                        {/* Stack the columns on mobile by making one full-width and the other half-width */}
                        <Row>
                            <Col xs={6} md={8}>
                                <h1>FlowManager</h1>
                                <p> Manage your way of life with us Easy and fast.</p>
                                <p>Build Your Base</p>
                                <p className='btn btn-warning'>Strat Now</p>
                            </Col>
                            <Col xs={6} md={4} className=''>
                                <img width={'500px'} src={homeImg} alt="" />
                            </Col>
                        </Row>

                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    </Container>
                    <Container >
                        <Row className='mb-5'>
                            <Col xs={6} md={4}>
                                <TaskCard />
                            </Col>
                            <Col xs={6} md={4}>
                                <div>
                                    <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} src={Profile}  alt="" className='btn' onClick={handleShow} />

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                A perfect routine can be a transformative force in our lives, offering structure, balance, and clarity. Here’s how a well-crafted routine can make a difference: <br />

                                1. Enhances Productivity
                                A routine helps prioritize tasks and minimizes decision fatigue. By knowing what to focus on and when, you can accomplish more in less time, leaving room for what truly matters. <br />

                                2. Reduces Stress
                                Predictability in your day-to-day life provides a sense of control. With a clear plan, you can anticipate challenges and address them without feeling overwhelmed. <br />

                            </Col>
                        </Row>

                    </Container>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Profile Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <img width={'200px'} src={profileImg} alt="" />
                            <p>*Upload only the following file type (jpeg,jpg,png) here!!!</p>
                        </div>
                    </Modal.Body>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal>

            </div>
        </>
    )
}

export default Home