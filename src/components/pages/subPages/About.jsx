import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  const [showBackToTop, setShowBackToTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>


      <Carousel style={{ marginTop: '-88px' }}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-image"
            src="assets/images/bg-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-image"
            src="assets/images/bg-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="assets/images/bg-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>





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

          <section className='cmpnyImg'>
            <h3 className='ourcom'>Our Company</h3>
            <p className='welcomecom'>Welcome to Novanj Sports Annotations, where every game tells a story. Whether you're here to relive the glory moments or catch up on the latest action, Novanj is your ultimate destination for in-depth analysis and captivating commentary. Get ready to immerse yourself in the world of sports like never before. Let's make every match unforgettable together!</p>
            <div className='ourImg'>
              <Row>
                <Col md={3} sm={6} >
                  <Image
                    src="https://source.unsplash.com/busy-office-workers-are-sitting-around-table-and-doing-their-job-together-concentrated-woman-is-typing-on-laptop-V9MGtweTl90"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 1"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/man-standing-in-front-of-people-sitting-beside-table-with-laptop-computers-gMsnXqILjp4"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 2"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/people-sitting-on-chair-in-front-of-computer-YI_9SivVt_s"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 3"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/white-corner-desk-PG8NyM_Mcts"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 4"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/man-standing-behind-flat-screen-computer-monitor-bzqU01v-G54"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 5"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/man-sitting-on-chair-wearing-gray-crew-neck-long-sleeved-shirt-using-apple-magic-keyboard-CPs2X8JYmS8"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 6"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/group-of-people-using-laptop-computer-QckxruozjRg"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 7"
                  />
                </Col>
                <Col md={3} sm={6}>
                  <Image
                    src="https://source.unsplash.com/person-holding-pencil-near-laptop-computer-5fNmWej4tAA"
                    fluid
                    style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.6s' }}
                    className="zoomcmp img-compny grayscale"
                    alt="Company Image 8"
                  />
                </Col>
              </Row>
            </div>
          </section>


          <div className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
          </div>
        </Container>
      </section>

    </>
  )
}

export default About
