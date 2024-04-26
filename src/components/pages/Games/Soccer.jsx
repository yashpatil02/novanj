import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faChartBar, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
import soccerStyle from './Css/Soccer.module.css'; // Importing module CSS

const Soccer = () => {
  return (
    <>
      <div className={soccerStyle.soccerSection}>
        <div className={soccerStyle.overlay}></div>
        <div className={soccerStyle.textContainer}>
          <h1 className={soccerStyle.fhH1}><span style={{color:"yellow",fontSize:'6rem '}}>S</span>occer</h1>
          <span
            className={soccerStyle.animatedLine} // Use className without `${}`
            style={{
              display: 'inline-block',
              width: '0%', // Initially set width to 0
              backgroundColor: '#27967A',
              height: '5px',
              marginBottom: '20px',
              transition: 'width 1s ease' // Transition for smooth animation
            }}
          />
          <h3 className={soccerStyle.fhH3}>Kick into Action: <br />Where Soccer Springs to Life!</h3>
        </div>
      </div>

      <section className={soccerStyle.infoFh}>
        <Container className={soccerStyle.basketballFh}>
          <Row>
            {/* Left side with image */}
            <Col md={6}>
              <div className={soccerStyle.customShadowFh}>
                <img src="assets/images/Soccer1.jpg" alt="Basketball" className={soccerStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>

            {/* Right side with text */}
            <Col md={6}>
              <div className={soccerStyle.textContentFh}>
                <h3 className={soccerStyle.confgHeading1}>Pioneering Soccer Player Tracking:</h3>
                <p className={soccerStyle.confgText}>Experience the pinnacle of athlete performance monitoring in soccer. We're pushing boundaries with cutting-edge insights into soccer-specific movements, intelligent workload management, and beyond.</p>
                <h3 className={soccerStyle.confgHeading2}>Smart Automated Player Tracking:</h3>
                <p className={soccerStyle.confgText2}>Harnessing state-of-the-art inertial sensors and advanced AI algorithms, Catapult Vector seamlessly captures every nuance of player performance on the dynamic soccer field.</p>
                <h3 className={soccerStyle.confgHeading3}>Next-Level Soccer Analytics:</h3>
                <p className={soccerStyle.confgText3}>Unlock unparalleled insights finely tuned for the unique demands of soccer. Dive deeper than ever before with our sophisticated analytics platform, revealing the subtleties that define the game.</p>
                <h3 className={soccerStyle.confgHeading4}>Empowering Soccer's Evolution:</h3>
                <p className={soccerStyle.confgText4}>With Catapult Vector, you're not just collecting data – you're driving the evolution of soccer performance, shaping the future of the sport one breakthrough at a time.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className={soccerStyle.footFirstCont}>
        <Row className={soccerStyle.footFirstRow}>
          <Col md={4} ms={12} className={soccerStyle.footFirstColA} >
            <h3>Let video and data coaching</h3>
            <p>Experience the seamless process of recording, reviewing, and sharing your football games with Novanj. Spend less time worrying about the technicalities and more time focusing on your team's success.</p>
            <button className={soccerStyle.getSBtn}>Get Started</button>
          </Col>
          <Col md={8} ms={12} className={soccerStyle.footFirstColB}></Col>
        </Row>
      </Container>
      <section>
        <Container className={soccerStyle.rulesMain}>
          <Row>
            <Col md={6}>
              <div>
                <h3 className={soccerStyle.ruleHeading1}><FontAwesomeIcon icon={faHeart} className={soccerStyle.iconss} /> Enhancing Tactical Insights:</h3>
                <p className={soccerStyle.ruleText}>Our platform's boundless customization empowers coaches to dissect data according to their preferences, amplifying flexibility and adaptability across diverse playing styles and strategies.</p>
                <h3 className={soccerStyle.ruleHeading2}><FontAwesomeIcon icon={faChartBar} className={soccerStyle.iconss} /> Tailored Analytical Solutions:</h3>
                <p className={soccerStyle.ruleText2}>Unleash the potential of unlimited customization, enabling coaches to scrutinize data based on their distinctive preferences and tactical blueprints.</p>
                <h3 className={soccerStyle.ruleHeading3}><FontAwesomeIcon icon={faBinoculars} className={soccerStyle.iconss} /> Strategic Opponent Analysis:</h3>
                <p className={soccerStyle.ruleText3}>Comprehensive opponent scouting equips teams with a decisive advantage. By pinpointing adversaries' vulnerabilities, teams can craft targeted strategies to exploit weaknesses, elevating their performance on the field.</p>
                <h3 className={soccerStyle.ruleHeading4}><FontAwesomeIcon icon={faTools} className={soccerStyle.iconss} /> Player Progression Resources:</h3>
                <p className={soccerStyle.ruleText4}>Empower player development through innovative features such as tagging, collaborative note-sharing, and seamlessly integrated film clips.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={soccerStyle.rulesFh}>
                <img src="assets/images/FC.jpg" alt="Basketball" className={soccerStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default Soccer;
