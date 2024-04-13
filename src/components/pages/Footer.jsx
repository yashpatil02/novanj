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
                                        <img className="carousel-img" src={imagePath} alt={`Slide ${index + 1}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <hr className="footer-divider" />
                    <Row>
                        <Col md={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos!</Col>
                        <Col md={6} className="footer-hr">
                            <h5 className="footer-heading">Social Media</h5>
                            <ul className="social-media-icons">
                                {/* WhatsApp */}
                                <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                {/* Instagram */}
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                {/* LinkedIn */}
                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                {/* Facebook */}
                                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                {/* Twitter */}
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
