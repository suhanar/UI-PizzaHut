import React from 'react'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (

    <Container fluid>
      <Row >
       <Col className='image-col'></Col>
        
      </Row>
      <Row>
        <Col className='image1-col ms-5 mb-5 mt-5'></Col>
        
        <Col className='about-col ms-5 mb-5 mt-5 p-5'>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </Col>
       
      </Row>
    </Container>
   
    
  )
}

export default About
