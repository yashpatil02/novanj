import React,{useEffect} from 'react';
import { Row, Col, Container,Image  } from 'react-bootstrap';
import './Services.css'; // Import your CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast, faAward, faBasketball } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  // Define the content array with objects representing each row
  useEffect(() => {
    AOS.init();
  }, []);
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms


  });

  return (
    <>
      <div className="services-Top">
        <div className="services-Top-containt" data-aos="fade-down" data-aos-duration="2000" data-aos-once="false">
          <h2 className="services-Top-head" >Novanj Analysis services</h2>
          <p className="services-Top-cont" >Welcome to Novanj Sports Data Analysis Services, where we unlock the power of data to revolutionize your sports
            insights. Our cutting-edge solutions provide invaluable insights, giving you a competitive edge like never before. Join us in
            exploring the limitless potential of data-driven decision-making in the dynamic world of sports. . . . .</p>
        </div>

      </div>
      <Container fluid>
        <Row className="services-Row justify-content-around m-3 p-5 ">
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faBasketball} className="fs" />
            <h className="fsh">Games</h>
            <p className="fsp">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faAward} className="fs" />
            <h className="fsh">Award</h>

            <p className="fsp">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faTruckFast} className="fs" />
            <h className="fsh">Product</h>

            <p className="fsp">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='p-5' data-aos="zoom-in-right" data-aos-duration="2000" data-aos-once="false" >
          <Row>
            <Col md={6} >
              <div className="wave-img" >
                {/* Content for the fourth box */}
                <Image className='wave-one' src="assets/images/ballb.png" fluid style={{ objectFit: 'cover', height: '90%' }} />
              </div>
            </Col>
            <Col md={6}>
              <div  >
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


        <div className='p-5' data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
          <Row>


            <Col md={6} >
              <div  >
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
            <Col md={6} >
              <div className="wave-img" >
                {/* Content for the fourth box */}
                <Image className='wave-one' src="assets/images/shortb.png" fluid style={{ objectFit: 'cover', height: '90%' }} />
              </div>
            </Col>
          </Row>
        </div>
        <div className='p-5 ' data-aos="fade-left" data-aos-duration="2000" data-aos-once="false">
          <Row>
            <Col md={6} >
              <div className="wave-img" >
                {/* Content for the fourth box */}
                <Image className='wave-one' src="assets/images/shortb.png" fluid style={{ objectFit: 'cover', height: '90%' }} />
              </div>
            </Col>
            <Col md={6}>
              <div  >
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
      <div className="services-Container mb-5">
        <h2 className="mesa">Services</h2>
        <div className="services-contact">
          <div className="box-container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>

            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>



          </div>
        </div>
      </div>
    </>
  );
}
export default Services