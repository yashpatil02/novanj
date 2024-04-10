import React from 'react';
import './Footer.css'; // Import your CSS file
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function Footer() {
// Array of image paths
const imagePaths = [
    '/assets/images/1.png',
    '/assets/images/ballb.png',
];
    return (
        <div className="footer">
            <Container>
                <footer>
                    <Row className="footer-content">
                        <Col md={3} className="footer-section">
                            <h5 className="footer-heading">Product</h5>
                            <ul className="footer-list">
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                            </ul>
                        </Col>
                        <Col md={3} className="footer-section">
                            <h5 className="footer-heading">About</h5>
                            {/* Add about content here */}
                        </Col>
                        <Col md={3} className="footer-section">
                            <h5 className="footer-heading">Contact Us</h5>
                            <ul className="footer-list">
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                                <li>Hello Name</li>
                            </ul>
                        </Col>
                        <Col md={3} className="footer-section">
                            <h5 className="footer-heading">Our Sports</h5>
                            <Carousel>
                                {imagePaths.map((imagePath, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="carousel-img" src={imagePath} alt={`Slide ${index + 1}`}   />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <hr className="footer-divider" />
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
