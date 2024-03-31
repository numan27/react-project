import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row, } from 'react-bootstrap'
import IMAGES from '../../assets/images'

const Header = () => {
  return (
    <div className='header'>
      <Navbar expand="lg" className="">
        <Container className=''>
          <Navbar.Brand className='' href="#home">
            <img width={80} src={IMAGES.LOGO} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='navLink' href="#home">Home</Nav.Link>
              <Nav.Link className='navLink' href="#link">Solution</Nav.Link>
              <Nav.Link className='navLink' href="#link">Pricing</Nav.Link>
              <Nav.Link className='navLink' href="#link">Blog</Nav.Link>
            </Nav>
            <div className='d-flex gap-3 align-items-center'>
              <Nav.Link className='navLink' href="#link">Login</Nav.Link>
              <Button>Get Started</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='d-flex justify-content-center mt-5'>
        <Row className='d-flex justify-content-between'>
          <Col md={6}>
            <div className='header-content'>
              <h1 className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita.</h1>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis aliquam ipsa aspernatur quam in.</p>

              <div className='d-flex gap-2'>
                <Button className='text-uppercase'>free trial</Button>
                <Button className='text-uppercase'>sign up with google</Button>
              </div>
            </div>
          </Col>

          <Col md={4}>
            Cards
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
