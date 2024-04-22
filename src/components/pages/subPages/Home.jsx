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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);


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
    TweenMax.to(".sport", {
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

        <img className="bg-image img-fluid" src="assets/images/pngwing.png" alt="" fluid />
        <div className="overlay">
          <div className="text-white" data-aos="fade-up-left" data-aos-duration="1500" data-aos-once="false">
            <p className='text-right'>Our advanced video analysis technology allows <br /> for seamless capture of every moment on the field,</p>
          </div>
          <a className='scroll-down' href='#secondsection'> <FontAwesomeIcon icon={faAngleDown} /></a>
        </div>

        {/* Social media icons */}
        <div className="social-icons">
          <a href="#" className="social-icon fb">
            <FontAwesomeIcon icon={faFacebookF} />
            <span className="social-icon-text">Facebook</span>
          </a>
          <a href="#" className="social-icon  twitter">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="social-icon-text">Twitter</span>
          </a>
          <a href="#" className="social-icon insta">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="social-icon-text">Instagram</span>
          </a>
          <a href="#" className="social-icon linkd">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="social-icon-text">Instagram</span>
          </a>
          {/* Add more social media icons as needed */}
        </div>

      </section>

      {/*-------------------- try code is here ----------------------------- */}

      <section className='fourcard ' id='secondsection'>
        <header>
          {/* <h3 className="text-lighter">Reliable, efficient delivery</h3> */}
          <h3 className="text-bold" data-aos="flip-up" data-aos-duration="1500" data-aos-once="false"> Features</h3>
          <p className="text-muted">Unlocking Peak Performance: Revolutionizing Video Analysis and Player Monitoring</p>
        </header>

        <main className='mainsection '>
          <div className="section">
            <div className="card card-supervisor" data-aos="fade-up-left" data-aos-duration="1500" data-aos-once="false">
              <div className="card-body">
                <div className="card-title text-bold">Capture</div>
                <div className="card-text text-muted">providing unparalleled insight into player performance. From multiple camera angles to real-time tracking, we ensure that no detail goes unnoticed.</div>
              </div>
              <div className="card-footer">
                <div className="card-img">
                  <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-supervisor.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="card card-team_builder" data-aos="fade-up-up" data-aos-duration="1500" data-aos-once="false">
              <div className="card-body">
                <div className="card-title text-bold">Analyze </div>
                <div className="card-text text-muted">Dive deep into the data with our powerful analytics engine. Our platform goes beyond basic stats, offering advanced metrics and visualizations to uncover patterns, trends, and opportunities for improvement. </div>
              </div>
              <div className="card-footer">
                <div className="card-img">
                  <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-team-builder.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="card card-karma" data-aos="fade-up-left" data-aos-duration="1500" data-aos-once="false">
              <div className="card-body">
                <div className="card-title text-bold">Plan</div>
                <div className="card-text text-muted">Armed with actionable insights, coaches and trainers can develop personalized training plans tailored to each athlete's strengths and weaknesses. </div>
              </div>
              <div className="card-footer">
                <div className="card-img">
                  <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-karma.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="card card-calculator" data-aos="fade-down-right" data-aos-duration="1500" data-aos-once="false">
              <div className="card-body">
                <div className="card-title text-bold">Share</div>
                <div className="card-text text-muted">Collaboration is key to success, which is why our platform makes it easy to share insights and strategies with teammates, coaches, and stakeholders.</div>
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


      <hr style={{ color: '#27967A', height: '2px' }} />


      {/* testimonial code is here ------------------------------------- */}
      <section className='tab-lap'>
        <Container>


          <div>
            <span style={{ display: 'inline-block', width: '5%', backgroundColor: '#27967A', borderRadius: '5px', height: '5px', }}
            />
            <h2 className='teamgames' data-aos="flip-up" data-aos-duration="1500" data-aos-once="false"> Team Games</h2>
            <span style={{ display: 'inline-block', width: '5%', backgroundColor: '#27967A', borderRadius: '5px', height: '5px', marginRight: '10px' }}
            />
          </div>

          <div className='tabLabDiv'>

            <img className="" src="assets/images/tabLab2.png" alt="" fluid data-aos="fade-left" data-aos-duration="1500" data-aos-once="false" />
            {/* <img  src="assets/images/pngwing.png" alt="" fluid /> */}
            <p className='tablabText'>Dive deep into the intricacies of the game with our user-friendly interface, offering detailed analysis at your fingertips. Whether you're evaluating individual player performance or dissecting team-wide tactics, Catapult Pro Video empowers coaches and teams to make data-driven decisions with confidence.</p>
          </div>
        </Container>
      </section>

      <hr style={{ color: '#27967A', height: '2px' }} />


      <section className='assist'>
  <div>
    <Container>
      <Row>
        <Col md={6} data-aos="fade-right" data-aos-duration="1500" data-aos-once="false">
          <h4 className='teamheading'>Game Insights, Beyond the Surface</h4>
          <h3 className='teamcon'>Where Numbers Meet Narratives:  Sports Analysis</h3>
          <p className='teamtext'>Customized Analysis Reports: Elevate your sports strategy with our customized analysis reports. Whether you're a coach looking to optimize team performance or a fantasy sports enthusiast seeking a competitive edge, our tailored reports offer actionable insights and recommendations.</p>
          <hr />
        </Col>
        <Col md={6} data-aos="fade-up-left" data-aos-duration="1500" data-aos-once="false">
          <img className="laptopbg" src="assets/images/softlapcopy.png" alt="" fluid />
        </Col>
      </Row>
    </Container>
  </div>
  <div class="circles">
  <div class="center-circle"></div>
</div>

</section>


      <hr style={{ color: '#27967A', height: '2px' }} />


      <section className='content'>

        <div className='project-wrapper'>
          <Container>

            <div className='m-5'>
              <h1 className='whynovanj'>WHY NOVANJ?</h1>
            </div>
            <Row>
              <Col md={4} >
                <div >
                  <i class="fa-solid fa-chart-pie "></i>
                  <h4 className='show1 mx-4'>Advanced Player Movement Analysis:</h4>
                  <p className='showtext mx-4'>Novanj is at the forefront of revolutionizing sports game analysis through cutting-edge techniques and comprehensive data insights. By delving deep into player movements, scores, and every aspect of the game, Novanj provides invaluable insights that drive performance enhancement and strategic decision-making. Let's explore why Novanj stands out in this domain.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <i class="fa-solid fa-chart-pie "></i>
                  <h4 className='show1 mx-4'>Comprehensive Performance Metrics:</h4>
                  <p className='showtext mx-4'>Novanj employs state-of-the-art technology to capture and analyze player movements with unparalleled precision. Using techniques such as computer vision and motion tracking, Novanj records every step, sprint, and pivot on the field, providing coaches and analysts with a granular understanding of player dynamics. This level of detail enables teams to optimize player strategies, identify areas for improvement, and maximize on-field performance.  </p>
                </div>
              </Col>
              <Col md={4} >
                <div>
                  <i class="fa-solid fa-chart-pie "></i>
                  <h4 className='show1 '> Real-time Insights and Feedback:</h4>
                  <p className='showtext mx-4'>Novanj goes beyond traditional performance metrics to provide a comprehensive analysis of player and team dynamics. From basic statistics like goals scored and assists to advanced metrics such as expected goals (xG), player heatmaps, and passing networks, Novanj offers a holistic view of the game. These insights empower coaches to fine-tune tactics, identify key strengths and weaknesses, and devise game-winning strategies. </p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </section>

      <hr style={{ color: '#27967A', height: '2px' }} />
      {/* happy clint counter code is here ----------------------------------- */}



      <div className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </div>
    </div>
  );
}

export default Home;
