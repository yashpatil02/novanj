import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from "../NavBars";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'; // Using faArrowAltCircleUp icon instead of faArrowUp
import './Home.css';
import './MediaQueri.css'
import { TweenMax, Expo } from 'gsap';
const Home = () => {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    const countElements = document.querySelectorAll('.count');
    const countsArray = Array.from(countElements);
    
    const intervals = countsArray.map((item) => {
      let startNumber = 0;

      function counterUp() {
        startNumber++;
        item.innerHTML = startNumber;

        if (startNumber === parseInt(item.dataset.number)) {
          clearInterval(stop);
        }
      }

      const stop = setInterval(() => {
        counterUp();
      }, 50);

      return stop;
    });

    setCounts(intervals);

    // Clear intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []); // Run once on component mount

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


  useEffect(() => {
    TweenMax.to(".sport",  {
        x: 30,
        opacity: 1,
        ease: Expo.easeInOut
    });

}, []);



  return (
    <div>
    <section className="bg-image-container">
      <div className="heading1">
        <span className='sport p-5'>Sports</span>
        <span className='analysis ps-4'>Analysis</span>
      </div>
      <img className="bg-image img-fluid" src="assets/images/pngwing.png" alt="" fluid  />
      <div className="overlay">
        <div className="text-white">
          <p className='text-right'>Lorem ipsum dolor, sit amet consectetur  elit. <br /> nulla magni sunt quos numquam unde fugit?</p>
        </div>
        <a className='scroll-down'> <FontAwesomeIcon icon={faAngleDown} /></a>

      </div>
    </section>


    {/*-------------------- try code is here ----------------------------- */}

   <section className='fourcard'>
   <header>
        <h3 className="text-lighter">Reliable, efficient delivery</h3>
        <h3 className="text-bold">Powered by Technology</h3>
        <p className="text-muted">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>

      <main className='mainsection '>
        <div className="section">
          <div className="card card-supervisor">
            <div className="card-body">
              <div className="card-title text-bold">Supervisor</div>
              <div className="card-text text-muted">Monitors activity to identify project roadblocks</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-supervisor.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card card-team_builder">
            <div className="card-body">
              <div className="card-title text-bold">Team Builder</div>
              <div className="card-text text-muted">Scans our talent network to create the optimal team for your project</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-team-builder.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card card-karma">
            <div className="card-body">
              <div className="card-title text-bold">Karma</div>
              <div className="card-text text-muted">Regularly evaluates our talent to ensure quality</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-karma.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card card-calculator">
            <div className="card-body">
              <div className="card-title text-bold">Calculator</div>
              <div className="card-text text-muted">Uses data from past projects to provide better delivery estimates</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-calculator.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>

   </section>
   

{/* testimonial code is here ------------------------------------- */}


      <div className="main">
      <div className="profile-card">
        <div className="img">
          <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>Vin Diesel</h3>
          <p>Senior App Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>Vin Diesel</h3>
          <p>Senior App Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>Vin Diesel</h3>
          <p>Senior App Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      {/* Add more profile cards here */}
    </div>


{/* happy clint counter code is here ----------------------------------- */}

<div id="counter" className='px-4'>
      <Row>
        <Col md={6} lg={3}>
          <Card className="card-supervisor">
            <Card.Body>
              <h1 className="count" data-number="50"></h1>
              <Card.Title>Team Members</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="card-supervisor">
            <Card.Body>
              <h1 className="count" data-number="15"></h1>
              <Card.Title>Year+ Experience</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="card-supervisor">
            <Card.Body>
              <h1 className="count" data-number="100"></h1>
              <Card.Title>Projects Completed</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="card-supervisor">
            <Card.Body>
              <h1 className="count" data-number="20"></h1>
              <Card.Title>Happy Clients</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

{/* back to top button code  */}
  {/* Back to Top button */}
    {/* Back to Top button */}
    <div className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </div>
    </div>
  );
}

export default Home;
