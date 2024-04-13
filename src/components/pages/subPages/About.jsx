import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './About.css';
function About() {


  return (
    <>
      <section className='about'>

        <Container >
          <Row >
            <Col md={6} >
              <div>
                <div className='text-start'>

                  <span style={{ display: 'inline-block', width: '10%', backgroundColor: 'orangered', borderRadius: '5px', height: '5px', marginRight: '10px' }}
                  />
                  <h4 className='whatwedo'>What We Do</h4>
                </div>
                <p className='whatwedotext'>
                  Through advanced data analytics and state-of-the-art technology, we meticulously annotate sports games, capturing key moments, statistics, and strategies. Our platform offers a dynamic and interactive experience, enabling users to engage with the game on a whole new level. At our core, we're pioneers in the realm of sports analytics, leveraging cutting-edge technology and meticulous data annotation to redefine how fans interact with their favorite games. Our process is both art and science, where every play, statistic, and strategic move is meticulously captured and analyzed.
                </p>
              </div>
            </Col>
            <Col md={6} className=''>
              <div >
              <Row>
        <Col md={6}>
          <div className="footer-box">
            {/* Content for the first box */}
            <Image
              src="https://source.unsplash.com/a-group-of-young-men-playing-a-game-of-ice-hockey-PdX8OwiNnJI"
              fluid
              style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.3s' }}
              className="zoom"
            />
          </div>
          <div className="footer-box">
            {/* Content for the second box */}
            <Image
              src="https://source.unsplash.com/man-in-yellow-long-sleeve-shirt-and-yellow-pants-playing-soccer-Wu7hYE7Lzzs"
              fluid
              style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.3s' }}
              className="zoom"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="footer-box">
            {/* Content for the third box */}
            <Image
              src="https://source.unsplash.com/group-of-women-in-red-and-white-soccer-jersey-playing-soccer-on-green-grass-field-during-IoJFOvbqF3c"
              fluid
              style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.3s' }}
              className="zoom"
            />
          </div>
          <div className="footer-box">
            {/* Content for the fourth box */}
            <Image
              src="https://source.unsplash.com/high-angel-photography-of-football-stadium-70YxSTWa2Zw"
              fluid
              style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.3s' }}
              className="zoom"
            />
          </div>
        </Col>
      </Row>
              </div>
            </Col>
          </Row>

          {/*------------- seconds section -------------------------------- */}
          <div className='wave'>
            <Row>
              <Col md={6}>
                <div className="wave-img">
                  {/* Content for the fourth box */}
                  <Image className='wave-one' src="assets/images/bskplyr.png" fluid style={{ objectFit: 'cover', height: '90%' }} />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <div className='text-start'>

                    <span style={{ display: 'inline-block', width: '10%', backgroundColor: 'orangered', borderRadius: '5px', height: '5px', marginRight: '10px' }}
                    />
                    <h4 className='OurMission'>Our Mission</h4>
                  </div>
                  <p className='OurMissiontext'>
                  Novanj is on a mission to revolutionize the sports industry by providing comprehensive, real-time annotations for sports games. We strive to deliver unparalleled insights and analysis, empowering fans, coaches, and players alike to deepen their understanding and appreciation of the game.At Novanj, we're driven by a singular purpose: to revolutionize the sports industry through the power of comprehensive, real-time annotations. Our mission is not just to watch the game, but to dissect it, decode it, and elevate it to new heights of understanding and appreciation.
                  </p>
                </div>
              </Col>
            </Row>

          </div>


        </Container>
      </section>

    </>
  )
}

export default About
