import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faChartBar, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
import icehockeyStyle from './Css/Icehockey.module.css'; // Importing module CSS

const Icehockey = () => {
  return (
    <>
      <div className={icehockeyStyle.icehockeySection}>
        <div className={icehockeyStyle.overlay}></div>
        <div className={icehockeyStyle.textContainer}>
        <h1 className={icehockeyStyle.fhH1}>Ice<span style={{color:"red",fontSize:'6rem '}}>H</span>ockey</h1>
          <span
            className={icehockeyStyle.animatedLine}// Use className without `${}`
            style={{
              display: 'inline-block',
              width: '0%', // Initially set width to 0
              backgroundColor: '#27967A',
              height: '5px',
              marginBottom: '20px',
              transition: 'width 1s ease' // Transition for smooth animation
            }}
          />
          <h3 className={icehockeyStyle.fhH3}>Charge onto the Ice: <br/>Where Hockey Ignites!</h3>
        </div>
      </div>

      <section className={icehockeyStyle.infoFh}>
        <Container className={icehockeyStyle.basketballFh}>
          <Row>
            {/* Left side with image */}
            <Col md={6}>
              <div className={icehockeyStyle.customShadowFh}>
                <img src="assets/images/Soccer1.jpg" alt="Basketball" className={icehockeyStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>

            {/* Right side with text */}
            <Col md={6}>
            <div className={icehockeyStyle.textContentFh}>
  <h3 className={icehockeyStyle.confgHeading1}>Revolutionizing Ice Hockey Player Tracking:</h3>
  <p className={icehockeyStyle.confgText}>Experience the forefront of athlete performance monitoring in ice hockey. We're breaking new ground with cutting-edge insights into ice hockey-specific movements, intelligent workload management, and beyond.</p>
  <h3 className={icehockeyStyle.confgHeading2}>Advanced Automated Player Tracking:</h3>
  <p className={icehockeyStyle.confgText2}>Utilizing state-of-the-art inertial sensors and advanced AI algorithms, Catapult Vector seamlessly captures every detail of player performance on the dynamic ice hockey rink.</p>
  <h3 className={icehockeyStyle.confgHeading3}>Elevated Ice Hockey Analytics:</h3>
  <p className={icehockeyStyle.confgText3}>Unlock unparalleled insights finely tuned for the unique demands of ice hockey. Delve deeper than ever before with our sophisticated analytics platform, revealing the nuances that define the game.</p>
  <h3 className={icehockeyStyle.confgHeading4}>Empowering Ice Hockey's Evolution:</h3>
  <p className={icehockeyStyle.confgText4}>With Catapult Vector, you're not just gathering data – you're propelling the evolution of ice hockey performance, shaping the future of the sport one breakthrough at a time.</p>
</div>

            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className={icehockeyStyle.footFirstCont}>
        <Row className={icehockeyStyle.footFirstRow}>
          <Col md={4} ms={12} className={icehockeyStyle.footFirstColA} >
            <h3>Let video and data coaching</h3>
            <p>Experience the seamless process of recording, reviewing, and sharing your football games with Novanj. Spend less time worrying about the technicalities and more time focusing on your team's success.</p>
            <button className={icehockeyStyle.getSBtn}>Get Started</button>
          </Col>
          <Col md={8} ms={12} className={icehockeyStyle.footFirstColB}></Col>
        </Row>
      </Container>
      <section>
        <Container className={icehockeyStyle.rulesMain}>
          <Row>
            <Col md={6}>
              <div>
                <h3 className={icehockeyStyle.ruleHeading1}><FontAwesomeIcon icon={faHeart} className={icehockeyStyle.iconss} /> Enhancing Tactical Insights:</h3>
                <p className={icehockeyStyle.ruleText}>Our platform's boundless customization empowers coaches to dissect data according to their preferences, amplifying flexibility and adaptability across diverse playing styles and strategies.</p>
                <h3 className={icehockeyStyle.ruleHeading2}><FontAwesomeIcon icon={faChartBar} className={icehockeyStyle.iconss} /> Tailored Analytical Solutions:</h3>
                <p className={icehockeyStyle.ruleText2}>Unleash the potential of unlimited customization, enabling coaches to scrutinize data based on their distinctive preferences and tactical blueprints.</p>
                <h3 className={icehockeyStyle.ruleHeading3}><FontAwesomeIcon icon={faBinoculars} className={icehockeyStyle.iconss} /> Strategic Opponent Analysis:</h3>
                <p className={icehockeyStyle.ruleText3}>Comprehensive opponent scouting equips teams with a decisive advantage. By pinpointing adversaries' vulnerabilities, teams can craft targeted strategies to exploit weaknesses, elevating their performance on the field.</p>
                <h3 className={icehockeyStyle.ruleHeading4}><FontAwesomeIcon icon={faTools} className={icehockeyStyle.iconss} /> Player Progression Resources:</h3>
                <p className={icehockeyStyle.ruleText4}>Empower player development through innovative features such as tagging, collaborative note-sharing, and seamlessly integrated film clips.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={icehockeyStyle.rulesFh}>
                <img src="assets/images/FC.jpg" alt="Basketball" className={icehockeyStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default Icehockey
