import React from 'react';
import './Footer.css'; // Import your CSS file
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function Footer() {
    // Array of image paths
    const imagePaths = [
        '/assets/images/11.jpg',
        '/assets/images/1.jpg',
        '/assets/images/about2.jpg',
        '/assets/images/portfolio-4.jpg',
        '/assets/images/img-05.jpg',
        '/assets/images/11.jpg',
    ];
    return (
        <div className="footer">
            <Container>
                <footer>
                    <Row className="footer-content">
                        <Col md={8}>
                            <Row >
                                <Col md={6} className="footer-section">
                                    <h5 className="footer-heading">Novanj Company</h5>
                                    <span>Novanj: Leading sports analysis provider empowering athletes, coaches, and teams worldwide with innovative tools and data-driven strategies for success.</span>
                                </Col>
                                <Col md={6} className="footer-section">
                                    <h5 className="footer-heading">Contact Us</h5>
                                    <div className="contact-info">
                                        <p >
                                            <i className="fas fa-phone"></i> Phone: +123456789<br />
                                            <i className="fas fa-envelope"></i> Email: info@novanj.com<br />
                                            <i className="fas fa-map-marker-alt"></i> Novanj Sports Analysis<br />
                                            123 Main Street, City, Country
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col md={12} className="footer-hr ">
                                    <h5 className="footer-heading">Social Media</h5>
                                    <ul className="social-media-icons">
                                        {/* WhatsApp */}
                                        <li><a href="#"><i className="fab fa-whatsapp fa-2x"></i></a></li>
                                        {/* Instagram */}
                                        <li><a href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
                                        {/* LinkedIn */}
                                        <li><a href="#"><i className="fab fa-linkedin fa-2x"></i></a></li>
                                        {/* Facebook */}
                                        <li><a href="#"><i className="fab fa-facebook fa-2x"></i></a></li>
                                        {/* Twitter */}
                                        <li><a href="#"><i className="fab fa-twitter fa-2x"></i></a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className="footer-section">
                            <h5 className="footer-heading">Our Sports</h5>
                            <div className="row d-flex">
                                {/* Map through imagePaths array and render each image */}
                                {imagePaths.map((imagePath, index) => (
                                    <div key={index} className=" footer-box">
                                        <img src={imagePath} alt={`Image ${index + 1}`} style={{ width: "100%", height: '100%',objectFit:'cover' }} />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <hr className="footer-divider" />
                    <Row>
                        <Col md={12}>
                            <span>
                                Privacy Policy | Terms & Conditions | Software License Agreement |
                                Do Not Sell or Share My Personal Information | Cookies | Security
                            </span>
                            <br />
                            <span>
                                Novanj Analysis is a product and service of Novanj Sports Technologies, Inc.
                                All text and design © 2007-2024. All rights reserved.
                            </span>
                        </Col>

                    </Row>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
