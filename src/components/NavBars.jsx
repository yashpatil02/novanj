// Navbar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const CustomNavbar = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
    <Navbar.Brand as={Link} to="/">Novanj</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto ms-auto" variant='underline'  >
        <Nav.Item className='me-4'>
        <Nav.Link eventKey="link-1" as={Link} to="/" onClick={() => scrollToSection('home')}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className='me-4'>
        <Nav.Link eventKey="link-2" as={Link} to="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className='me-4'>
        <Nav.Link eventKey="link-3" as={Link} to="/services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item className='me-4'>
        <Nav.Link eventKey="link-4" onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Container>  
  </Navbar>
  );
}

export default CustomNavbar;
