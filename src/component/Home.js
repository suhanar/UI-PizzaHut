import { Button } from 'react-bootstrap';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import HomePic from '../assets/pizzaHome.jpg';


function Home() {
  return (
    <Container fluid className='home'>
       <div className="header d-flex flex-column p-5 align-items-start" bg-dark>
         <h1 >Pizza Hut Pizza</h1>
         <p>PIZZA TO FIT ANY TASTE</p>
         <Button className="btn btn-secondary">Order Now</Button>
       </div>
    </Container>
  )
}

export default Home
