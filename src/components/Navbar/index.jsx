import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './navbar.css'
export default function Header({Theme,setTheme}){
  
  return(
    <div data-aos="fade-down">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="/" className='brands'>Bharat.P()</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto comp ">
            <Nav.Link className="active comp-item" href="/">Home</Nav.Link>
            <Nav.Link className="active comp-item" href="/education">Education</Nav.Link>
            <Nav.Link className="active comp-item" href="/experience">Experience</Nav.Link>
            <Nav.Link className="active comp-item" href="/projects">Projects</Nav.Link>
            <Nav.Link className="active comp-item" href="/contacts">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}