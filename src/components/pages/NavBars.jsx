import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon

const CustomNavbar = () => {
  const location = useLocation();
  const [navbarBg, setNavbarBg] = useState('#000000'); // Set black background color
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [showMobileNav, setShowMobileNav] = useState(false); // State to manage mobile navbar visibility

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleMobileNav = () => {
    if (showDropdown) {
      setShowDropdown(false); // Close the dropdown if it's open
    }
    setShowMobileNav(!showMobileNav); // Toggle the mobile navbar visibility
  };
  
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");
      const offset = window.scrollY;
      if (offset > 200) {
        console.log("Changing to white background color");
        setNavbarBg('#ffffff'); // Change to white background color when scrolled
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        console.log("Reverting to black background color");
        setNavbarBg('#000000'); // Revert to black background color when not scrolled
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      console.log("Removing event listener...");
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${showMobileNav ? 'show' : ''}`}>
        <Nav className="flex-column">
        <Navbar.Brand as={Link} to="/"><img src="assets/images/logo.png" alt="" className='mb-4 ms-5' /></Navbar.Brand>
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => { scrollToSection('home'); toggleMobileNav(); }}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={toggleMobileNav}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/services" onClick={toggleMobileNav}>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" onClick={toggleMobileNav}>Contact</Nav.Link>
          </Nav.Item>
          {/* Dropdown Items */}
          <NavDropdown title="Games" id="basic-nav-dropdown" show={showDropdown} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
            <NavDropdown.Item>
              <Nav.Link as={Link} to="/basketball" onClick={toggleMobileNav}>Basketball</Nav.Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Item>
              <Nav.Link as={Link} to="/football" onClick={toggleMobileNav}>Football</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
                <Nav.Link eventKey="link-7" as={Link} to="/Netball"  onClick={toggleMobileNav}>Netball</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link eventKey="link-8" as={Link} to="/Soccer"  onClick={toggleMobileNav}>Soccer</Nav.Link>
              </NavDropdown.Item> */}
              <NavDropdown.Item >
                <Nav.Link eventKey="link-9" as={Link} to="/Fieldhockey"  onClick={toggleMobileNav}>Fieldhockey</Nav.Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item >
                <Nav.Link eventKey="link-10" as={Link} to="/Icehockey"  onClick={toggleMobileNav}>Icehockey</Nav.Link>
              </NavDropdown.Item> */}
            {/* Add more dropdown items */}
          </NavDropdown>
        </Nav>
      </div>
      
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" bg={navbarBg} variant="light" sticky="top" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="assets/images/logo.png" alt="" /></Navbar.Brand>
          {/* Hamburger Icon */}
          <FaBars className="d-lg-none hamburger-icon" onClick={toggleMobileNav} />
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
                <Nav.Link eventKey="link-4" as={Link} to="/contact">Contact</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Games" id="basic-nav-dropdown" show={showDropdown} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                <NavDropdown.Item>
                  <Nav.Link eventKey="link-5" as={Link} to="/basketball">Basketball</Nav.Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item>
                  <Nav.Link eventKey="link-6" as={Link} to="/football">Football</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Nav.Link eventKey="link-7" as={Link} to="/Netball">Netball</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link eventKey="link-8" as={Link} to="/Soccer">Soccer</Nav.Link>
              </NavDropdown.Item> */}
              <NavDropdown.Item >
                <Nav.Link eventKey="link-9" as={Link} to="/Fieldhockey">Fieldhockey</Nav.Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item >
                <Nav.Link eventKey="link-10" as={Link} to="/Icehockey">Icehockey</Nav.Link>
              </NavDropdown.Item> */}
                {/* Add more dropdown items */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
