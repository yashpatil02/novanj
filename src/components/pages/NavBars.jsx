// Navbar.js
import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
const CustomNavbar = () => {
  const location = useLocation();
  const [navbarBg, setNavbarBg] = useState('#000000'); // Set black background color

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setNavbarBg('#ffffff'); // Change to white background color when scrolled
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        setNavbarBg('#000000'); // Revert to black background color when not scrolled
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg={navbarBg} variant="light" sticky="top" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="assets/images/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ms-auto" variant='underline'>
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
              {/* <Nav.Link eventKey="link-4" onClick={() => scrollToSection('contact')}>Contact</Nav.Link> */}
              <Nav.Link eventKey="link-4" as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  eventKey="link-5" as={Link} to="/basketball">Basketball</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
