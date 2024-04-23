import React, { useEffect } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './Services.css'; // Import your CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast, faAward, faBasketball, faAddress, Card, faDatabase, faArrowsLeftRightToLine, faAddressCard, faVideo, faMagnifyingGlassChart, faSquarePollVertical, faTv, faChartLine, faChartPie, faVolleyball } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesMideaQueri.css';

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
      <Container fluid className="services-Top">
        <div className="ser-top">
          <div className="services-Top-containt" data-aos="fade-down" data-aos-duration="2000" data-aos-once="false">
            <h2 className="services-Top-head" >Novanj Analysis services</h2>
            <p className="services-Top-cont" >Welcome to Novanj Sports Data Analysis Services, where we unlock the power of data to revolutionize your sports
              insights. Our cutting-edge solutions provide invaluable insights, giving you a competitive edge like never before. Join us in
              exploring the limitless potential of data-driven decision-making in the dynamic world of sports. . . . .</p>

          </div>
        </div>
      </Container>
      <Container  fluid className="frow">
        <Row className="services-Row justify-content-around m-3 p-5 ">
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faBasketball} className="fs" />
            <h className="fsh">Games</h>
            <p className="fsp">Cricket, football, basketball, hockey, and ice hockey are prominent sports with diverse fan bases and unique gameplay.</p>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faAward} className="fs" />
            <h className="fsh">Award</h>

            <p className="fsp">Novanj Company was honored with prestigious awards for innovation, excellence, and outstanding contributions in its field.</p>
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
            <FontAwesomeIcon icon={faTruckFast} className="fs" />
            <h className="fsh">Product</h>

            <p className="fsp">Novanj Company provides innovative software, hardware, and tech solutions to boost efficiency and productivity across industries.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid >

        <div className=' ser-cont p-5' data-aos="zoom-in-right" data-aos-duration="2000" data-aos-once="false" >
          <Row>
            <Col md={6} className="sera">
              <div className="wave-img" >

                <Image className='wave-one' src="assets/images/dataAn.jpg" fluid style={{ objectFit: 'cover', height: '80%', marginTop: '8%' }} />
              </div>
            </Col>
            <Col md={6} className="sera">
              <div  >
                <div className='text-start'>
                  <FontAwesomeIcon icon={faMagnifyingGlassChart} style={{ display: 'inline-block', fontSize: '40px', color: 'orangered', marginRight: '20px' }}
                  />

                  <h4 className='OurMission'>Data Analysis</h4>
                </div>
                <p className='ntext'>
                  Novanj, a pioneering data analysis company, utilizes AI models to extract valuable insights from raw data in various industries. Specializing in AI-powered cameras and models, Novanj trains its technology to interpret complex datasets and deliver actionable intelligence. Through rigorous training, these models continuously evolve to meet industry demands, offering unparalleled accuracy and efficiency. Novanj's innovative approach empowers businesses across sectors to optimize operations, enhance decision-making, and unlock new opportunities for growth. With a focus on cutting-edge AI technology, Novanj is revolutionizing the way businesses harness data to drive success and innovation.
                </p>
              </div>
            </Col>

          </Row>
        </div>


        <div className=' ser-cont p-5' data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
          <Row>


            <Col md={6} className="sera">
              <div  >
                <div className='text-start'>

                  <FontAwesomeIcon icon={faVideo} style={{ display: 'inline-block', fontSize: '40px', color: 'orangered', marginRight: '20px' }} />

                  <h4 className='OurMission'>AI Cemera vision</h4>
                </div>
                <p className='ntext'>
                  Novanj's AI Camera Vision technology pioneers a new era in visual data analysis. By leveraging advanced AI algorithms, it extracts valuable insights from raw visual data, revolutionizing industries with unparalleled accuracy and efficiency. As technology evolves, Novanj envisions further advancements, with AI cameras becoming integral in various sectors, from security to healthcare. In sports, Novanj's AI-based sports data analysis transforms raw data into actionable insights, empowering teams and coaches to optimize performance and strategy. With a commitment to innovation, Novanj continues to push the boundaries of AI technology, shaping the future of visual data analysis and sports analytics.
                </p>
              </div>
            </Col>
            <Col md={6} className="sera">
              <div className="wave-img" >
                <Image className='wave-one' src="assets/images/vision-in-sports.png" fluid style={{ objectFit: 'cover', height: '90%', marginTop: '3%' }} />
              </div>
            </Col>
          </Row>
        </div>
        <div className=' ser-cont p-5' data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" >
          <Row>
            <Col md={6} className="sera" >
              <div className="wave-img" >
                <Image className='wave-one' src="assets/images/FC.jpg" fluid style={{ objectFit: 'cover', height: '90%', marginTop: '3%' }} />
              </div>
            </Col>
            <Col md={6} className="sera">
              <div  >
                <div className='text-start'>
                  <FontAwesomeIcon icon={faVolleyball} style={{ display: 'inline-block', fontSize: '40px', color: 'orangered', marginRight: '20px' }} />
                  <h4 className='OurMission'>Sports</h4>
                </div>
                <p className='ntext'>
                  The sports industry stands as a dynamic ecosystem encompassing various sectors, from professional leagues and teams to media and merchandising. It serves as a global platform uniting diverse cultures and communities through the universal language of sports. With the rise of digitalization and technological advancements, the industry experiences continuous evolution, with innovations such as AI-powered analytics, virtual reality experiences, and fan engagement platforms reshaping how sports are experienced and consumed. As an economic powerhouse, it generates substantial revenue streams through broadcasting rights, sponsorships, and ticket sales, driving economic growth and fostering social connections worldwide.
                </p>
              </div>
            </Col>

          </Row>
        </div>

      </Container>

      <Container fluid className="service-expo">

        <div className="rxpo-div" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-once="false">
          <h3 className="expo-serv-heading">Discover  Services</h3>
          <p className="expo-text">
            Discover Novanj's comprehensive data analysis services. From AI-powered analytics to advanced data visualization, we offer cutting-edge solutions to unlock insights and drive decision-making. Explore how our expertise can empower your business to thrive in today's data-driven world.</p>
          <button className="ex-more">Explore More</button>
        </div>
      </Container>
      <Container fluid className="services-hr ">
        <div className="services-contaniner" >
          <h2 className="services-heading-our">OUR SERVICES</h2>
          <p className="services-con-text"> Introducing Novanj Sports Data Analysis: Your partner for precision insights and performance-driven strategies. Our dedicated team crafts tailored solutions to propel your business forward. Accessible platforms, comprehensive analysis, and client-centric approach ensure your success. Join us today and unlock your business's full potential!</p>
          <Row className="jus">
            <Col sm={6} md={4} lg={3} className="card-boxs text-center">
              <FontAwesomeIcon icon={faTv} className="icon" />
              <h5 className="head">Live & video Analysis</h5>
              <p>Real-time analysis of player performance enhances strategic decision-making in sports.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} className="icon" />
              <h5 className="head">Basic Analysis</h5>
              <p>Essential review of sports data for insights and performance improvement.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              <h5 className="head">Standard Analysis</h5>
              <p>Conventional examination of sports data for strategic insights and performance.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faChartPie} className="icon" />
              <h5 className="head">Advance Analysis</h5>
              <p>Conventional examination of sports data for strategic insights and performance.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faSquarePollVertical} className="icon" />
              <h5 className="head">Advance Reporting</h5>
              <p>Sophisticated analysis and comprehensive reporting for strategic insights making.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faAddressCard} className="icon" />
              <h5 className="head">Scoring Application</h5>
              <p>Application designed for scoring events or games with efficiency and accuracy.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs">
              <FontAwesomeIcon icon={faDatabase} className="icon" />
              <h5 className="head">Data Visualization</h5>
              <p>Presentation of data through visual elements for clear understanding and analysis.</p>
            </Col>
            <Col sm={6} md={4} lg={3} className="card-boxs text-center">
              <FontAwesomeIcon icon={faArrowsLeftRightToLine} className="icon" />
              <h5 className="head">Predictive Analysis</h5>
              <p>Utilizing data to forecast future outcomes and trends for informed decision-making.</p>
            </Col>
          </Row>

        </div>
      </Container>
    </>
  );
}
export default Services