import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Css/Basketball.css';

const Basketball = () => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [color , setColor] = useState('');

    const handleYellowClick = () => {
        setBackgroundColor('black');
        setColor('#27967A');
    };

    const handleBlueClick = () => {
        setBackgroundColor('skyblue');
        setColor('white');
    };


    const handlegreenClick =() => {
        setBackgroundColor('#27967A');
        setColor('white');
    }
    return (
        <div>
            <section className="basketball-expo">
                <div className="bs-div">
                    <h3 className="expo-bs-heading">Basketball</h3>
                    <p className="bs-text"> Elevate Your Game: Discover the Ultimate Basketball Experience</p>
                    <button className="bs-more">Explore More</button>
                </div>
            </section>

            <section className='info-bs' style={{ backgroundColor: backgroundColor }}>
                <Container className="basketball-hr">
                    <Row>
                        {/* Left side with image */}
                        <Col md={6}>
                            <div className="custom-shadow">
                                <img src="assets/images/bsr.png" alt="Basketball" className="img-fluid" style={{ borderRadius: "8px", width: "100%" }} />
                            </div>
                        </Col>

                        {/* Right side with text */}
                        <Col md={6}>
                            <div className="text-content">
                                <h3 className="con-heading1" style={{color :color}}>Revolutionizing Basketball Player Tracking:</h3>
                                <p className="con-text">At Catapult Vector, we're setting a new standard for athlete monitoring with groundbreaking insights into basketball-specific movements, workload, and more.</p>
                                <h3 className="con-heading2" style={{color :color}}>Automatic Identification Tracking:</h3>
                                <p className="con-text2">With Catapult Vector, you can harness the power of our state-of-the-art inertial sensors and machine learning algorithms to automatically track every aspect of player performance on the basketball court.</p>
                                <h3 className="con-heading3" style={{color :color}}>Unprecedented Insights:</h3>
                                <p className="con-text3">Our basketball-specific tracking technology goes beyond traditional metrics, offering insights tailored to the unique demands of the game.</p>
                                <h3 className="con-heading4" style={{color :color}}>The Future of Basketball Performance:</h3>
                                <p className="con-text4">With Catapult Vector, you're not just tracking data – you're unlocking the future of basketball performance. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="color-boxes">
                    <div className="yellow-box" onClick={handleYellowClick}></div>
                    <div className="blue-box" onClick={handleBlueClick}></div>
                    <div className="lightgreen-box" onClick={handlegreenClick}></div>
                </div>
            </section>
        </div>
    );
};

export default Basketball;
