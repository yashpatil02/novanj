import React from 'react';
import './Footer.css'; // Import your CSS file
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faPhone, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
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
                                <Col md={4} className="footer-section">
                                    <h5 className="footer-heading">Novanj Company</h5>
                                    <p className='footer-comp'>Novanj: Leading sports analysis provider empowering athletes, coaches, and teams worldwide with innovative tools and data-driven strategies for success.</p>
                                </Col>
                                <Col md={4} className="footer-section">
                                    <h5 className="footer-heading">Contact Us</h5>
                                    <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>  <FontAwesomeIcon icon={faPhone} className='me-2' /> 9021042333</li>
                                        <li>  <FontAwesomeIcon icon={faEnvelope } className='me-2' /> novanj@gmail.com</li>
                                        <li> <FontAwesomeIcon icon={faLocationDot } className='me-2' />Novanj Sports analyer Pvt Ltd, Rane Nagar, Nashik, Maharashtra 422009</li>
                                       
                                    </ul>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <h5 className="footer-heading">Games</h5>
                                    <ul className="games-list">
                                        <li>FootBall</li>
                                        <li>BasketBall</li>
                                        <li>NetBall</li>
                                        <li>Ice Hockey</li>
                                        <li>Field Hockey</li>
                                        <li>Soccer</li>
                                    </ul>
                                </Col>

                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col md={12} className="footer-hr ">
                                    <h5 className="footer-heading">Social Media</h5>
                                    <ul className="social-media-icons">
                                        {/* WhatsApp */}
                                        {/* <li className='mediaround'><a href="#"><i className="fab fa-whatsapp fa-2x"></i></a></li> */}
                                        {/* Instagram */}
                                        <li className='mediaround instas'><a href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
                                        {/* LinkedIn */}
                                        <li className='mediaround link'><a href="#"><i className="fab fa-linkedin fa-2x"></i></a></li>
                                        {/* Facebook */}
                                        <li className='mediaround fbs'><a href="#"><i className="fab fa-facebook fa-2x"></i></a></li>
                                        {/* Twitter */}
                                        <li className='mediaround twitt'><a href="#"><i className="fab fa-twitter fa-2x"></i></a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className="footer-section">
                            <h5 className="footer-heading">Our Sports</h5>
                            <div className="row d-flex footer-img">
                                {/* Map through imagePaths array and render each image */}
                                {imagePaths.map((imagePath, index) => (
                                    <div key={index} className=" footer-box">
                                        <img src={imagePath} alt={`Image ${index + 1}`} style={{ width: "100%", height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <hr className="footer-divider" style={{ color: 'white' }} />
                    <Row>



                        <Col md={12} className="d-flex justify-content-between align-items-center">
                            <p className='m-0 copyright'>&copy; 2024 Novanj. All rights reserved.</p>
                            <div className="text-end">
                                <p className="m-0 term">Terms & Conditions - Privacy Policy</p>
                                {/* <p className="m-0">Privacy Policy</p> */}
                            </div>
                        </Col>


                    </Row>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
