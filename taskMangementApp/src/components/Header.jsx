import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoimg from '../assets/logo.png'
const Header = () => {
  return (
    <>
        <div>
        <Navbar style={{backgroundColor:'rgb(220, 201, 166)'}} className=" fw-bolder">
        <Container>
          <Navbar.Brand  className='fs-2'>
            <img alt=""src={logoimg} width="50" height="50" className="d-inline-block align-top"/>{' '}
            FlowManager  
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    </>
  )
}

export default Header