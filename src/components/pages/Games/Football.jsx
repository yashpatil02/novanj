import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faChartBar, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
import footBallStyle from './Css/FootBall.module.css';

const Football = () => {
  return (
    <>

      <div className={footBallStyle.footBallSection}>
        <div className={footBallStyle.overlay}></div>
        <div className={footBallStyle.textContainer}>
          <h1 className={footBallStyle.fhH1}>Foot<span style={{color:"aqua",fontSize:'6rem '}}>B</span>all</h1>
          <span
            className={footBallStyle.animatedLine} // Use className without `${}`
            style={{
              display: 'inline-block',
              width: '0%', // Initially set width to 0
              backgroundColor: '#27967A',
              height: '5px',
              marginBottom: '20px',
              transition: 'width 1s ease' // Transition for smooth animation
            }}
          />
          <h3 className={footBallStyle.fhH3}>Charge into Action: <br />Where  <span style={{color:"orange",fontSize:'3rem', fontWeight:'500'}}>Football</span> Springs to Life!</h3>
        </div>
      </div>

      <section className={footBallStyle.infoFh}>
        <Container className={footBallStyle.basketballFh}>
          <Row>
            {/* Left side with image */}
            <Col md={6}>
              <div className={footBallStyle.customShadowFh}>
                <img src="assets/images/img-05.jpg" alt="Basketball" className={footBallStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>

            {/* Right side with text */}
            <Col md={6}>
              <div className={footBallStyle.textContentFh}>
                <h3 className={footBallStyle.confgHeading1}>Revolutionizing Football Player Tracking:</h3>
                <p className={footBallStyle.confgText}>Experience the forefront of athlete performance monitoring in football. We're breaking new ground with cutting-edge insights into football-specific movements, intelligent workload management, and more.</p>
                <h3 className={footBallStyle.confgHeading2}>Advanced Automated Player Tracking:</h3>
                <p className={footBallStyle.confgText2}>Utilizing state-of-the-art inertial sensors and advanced AI algorithms, Catapult Vector seamlessly captures every detail of player performance on the dynamic football field.</p>
                <h3 className={footBallStyle.confgHeading3}>Elevated Football Analytics:</h3>
                <p className={footBallStyle.confgText3}>Unlock unparalleled insights finely tuned for the unique demands of football. Delve deeper than ever before with our sophisticated analytics platform, revealing the nuances that define the game.</p>
                <h3 className={footBallStyle.confgHeading4}>Empowering Football's Evolution:</h3>
                <p className={footBallStyle.confgText4}>With Catapult Vector, you're not just gathering data – you're propelling the evolution of football performance, shaping the future of the sport one breakthrough at a time.</p>
              </div>


            </Col>
          </Row>
        </Container>
      </section>
      {/* <Container fluid className={footBallStyle.footFirstCont}>
        <Row className={footBallStyle.footFirstRow}>
          <Col md={4} ms={12} className={footBallStyle.footFirstColA} >
            <h3>Let video and data coaching</h3>
            <p>Experience the seamless process of recording, reviewing, and sharing your football games with Novanj. Spend less time worrying about the technicalities and more time focusing on your team's success.</p>
            <button className={footBallStyle.getSBtn}>Get Started</button>
          </Col>
          <Col md={8} ms={12} className={footBallStyle.footFirstColB}></Col>
        </Row>
      </Container> */}
      <section>
        <Container className={footBallStyle.rulesMain}>
          <Row>
            <Col md={6}>
              <div>
                <h3 className={footBallStyle.ruleHeading1}><FontAwesomeIcon icon={faHeart} className={footBallStyle.iconss} /> Enhancing Tactical Insights:</h3>
                <p className={footBallStyle.ruleText}>Our platform's boundless customization empowers coaches to dissect data according to their preferences, amplifying flexibility and adaptability across diverse playing styles and strategies.</p>
                <h3 className={footBallStyle.ruleHeading2}><FontAwesomeIcon icon={faChartBar} className={footBallStyle.iconss} /> Tailored Analytical Solutions:</h3>
                <p className={footBallStyle.ruleText2}>Unleash the potential of unlimited customization, enabling coaches to scrutinize data based on their distinctive preferences and tactical blueprints.</p>
                <h3 className={footBallStyle.ruleHeading3}><FontAwesomeIcon icon={faBinoculars} className={footBallStyle.iconss} /> Strategic Opponent Analysis:</h3>
                <p className={footBallStyle.ruleText3}>Comprehensive opponent scouting equips teams with a decisive advantage. By pinpointing adversaries' vulnerabilities, teams can craft targeted strategies to exploit weaknesses, elevating their performance on the field.</p>
                <h3 className={footBallStyle.ruleHeading4}><FontAwesomeIcon icon={faTools} className={footBallStyle.iconss} /> Player Progression Resources:</h3>
                <p className={footBallStyle.ruleText4}>Empower player development through innovative features such as tagging, collaborative note-sharing, and seamlessly integrated film clips.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={footBallStyle.rulesFh}>
                <img src="assets/images/FC.jpg" alt="Basketball" className={footBallStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
}

export default Football;
