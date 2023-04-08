
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/pizzaIcon1.jpg';
import { Link } from 'react-router-dom';


function NavbarComp() {
  return (
    
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="d-flex">
      <Container>
        <Navbar.Brand href="#">
            <img className="" style={{width:'70px'}} src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='large text-light p-lg-4'>Home</Link>
            <Link to="/about" className='large text-light p-lg-4'>About</Link>
            <Link to="/menu" className='large text-light p-lg-4'>Menu</Link>
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    
  )
}

export default NavbarComp
