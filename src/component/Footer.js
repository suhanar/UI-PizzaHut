import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid bg-dark variant="dark" className="footer p-1">
      <div className='d-flex p-3 justify-content-center '>
        <i className='bi bi-facebook p-3 text-light'></i>
        <i className='bi bi-linkedin p-3 text-light'></i>
        <i className='bi bi-instagram p-3 text-light'></i>
      </div>
      <p className='text-light'>CopyRight@suhanaRoshan2023</p>
    </Container>
  )
}

export default Footer
