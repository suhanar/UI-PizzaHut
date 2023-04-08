import React from 'react';
import { MenuFile } from '../helpers/MenuFile';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Menu() {
  return (
    <Container fluid >
         <Row className='menu-col '  >
       <Col  className='p-5 m-5 d-flex justify-content-center'  >
         <h1 className='h1-menu m-5 w-50 h-100 d-flex justify-content-center align-items-center'>Our Menu</h1>
       </Col>
        
      </Row>

      <Container className='d-flex justify-content-center flex-wrap p-5'>

      {
        MenuFile.map(e=>(
            <Card className='p-3 mb-5 ms-5 ' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='w-100 h-50' src={e.image} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <p>{e.price}</p>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
        ))

      }


      </Container>





      
    </Container>
  )
}

export default Menu
