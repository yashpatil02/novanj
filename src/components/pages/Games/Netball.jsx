import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faChartBar, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
import netballStyle from './Css/Netball.module.css'; // Importing module CSS
const Netball = () => {
  return (
    <>
      <div className={netballStyle.netBallSection}>
        <div className={netballStyle.overlay}></div>
        <div className={netballStyle.textContainer}>
          <h1 className={netballStyle.fhH1}>Net<span style={{ color: "orange", fontSize: '6rem ' }}>B</span>all</h1>
          <span
            className={netballStyle.animatedLine} // Use className without `${}`
            style={{
              display: 'inline-block',
              width: '0%', // Initially set width to 0
              backgroundColor: '#27967A',
              height: '5px',
              marginBottom: '20px',
              transition: 'width 1s ease' // Transition for smooth animation
            }}
          />
          <h3 className={netballStyle.fhH3}>Kick into Action:  <br />Where Netball Ignites!</h3>
        </div>
      </div>

      <section className={netballStyle.infoFh}>
        <Container className={netballStyle.basketballFh}>
          <Row>
            {/* Left side with image */}
            <Col md={6}>
              <div className={netballStyle.customShadowFh}>
                <img src="assets/images/nn.jpg" alt="Basketball" className={netballStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>

            {/* Right side with text */}
            <Col md={6}>
              <div className={netballStyle.textContentFh}>
                <h3 className={netballStyle.confgHeading1}>Revolutionizing Netball Player Tracking:</h3>
                <p className={netballStyle.confgText}>Experience the forefront of athlete performance monitoring in netball. We're breaking new ground with cutting-edge insights into netball-specific movements, intelligent workload management, and beyond.</p>
                <h3 className={netballStyle.confgHeading2}>Advanced Automated Player Tracking:</h3>
                <p className={netballStyle.confgText2}>Utilizing state-of-the-art inertial sensors and advanced AI algorithms, Catapult Vector seamlessly captures every detail of player performance on the dynamic netball court.</p>
                <h3 className={netballStyle.confgHeading3}>Elevated Netball Analytics:</h3>
                <p className={netballStyle.confgText3}>Unlock unparalleled insights finely tuned for the unique demands of netball. Delve deeper than ever before with our sophisticated analytics platform, revealing the nuances that define the game.</p>
                <h3 className={netballStyle.confgHeading4}>Empowering Netball's Evolution:</h3>
                <p className={netballStyle.confgText4}>With Catapult Vector, you're not just gathering data – you're propelling the evolution of netball performance, shaping the future of the sport one breakthrough at a time.</p>
              </div>


            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className={netballStyle.footFirstCont}>
        <Row className={netballStyle.footFirstRow}>
          <Col md={4} ms={12} className={netballStyle.footFirstColA} >
            <h3>Let video and data coaching</h3>
            <p>Experience the seamless process of recording, reviewing, and sharing your football games with Novanj. Spend less time worrying about the technicalities and more time focusing on your team's success.</p>
            <button className={netballStyle.getSBtn}>Get Started</button>
          </Col>
          <Col md={8} ms={12} className={netballStyle.footFirstColB}></Col>
        </Row>
      </Container>
      <section>
        <Container className={netballStyle.rulesMain}>
          <Row>
            <Col md={6}>
              <div>
                <h3 className={netballStyle.ruleHeading1}><FontAwesomeIcon icon={faHeart} className={netballStyle.iconss} /> Enhancing Tactical Insights:</h3>
                <p className={netballStyle.ruleText}>Our platform's boundless customization empowers coaches to dissect data according to their preferences, amplifying flexibility and adaptability across diverse playing styles and strategies.</p>
                <h3 className={netballStyle.ruleHeading2}><FontAwesomeIcon icon={faChartBar} className={netballStyle.iconss} /> Tailored Analytical Solutions:</h3>
                <p className={netballStyle.ruleText2}>Unleash the potential of unlimited customization, enabling coaches to scrutinize data based on their distinctive preferences and tactical blueprints.</p>
                <h3 className={netballStyle.ruleHeading3}><FontAwesomeIcon icon={faBinoculars} className={netballStyle.iconss} /> Strategic Opponent Analysis:</h3>
                <p className={netballStyle.ruleText3}>Comprehensive opponent scouting equips teams with a decisive advantage. By pinpointing adversaries' vulnerabilities, teams can craft targeted strategies to exploit weaknesses, elevating their performance on the field.</p>
                <h3 className={netballStyle.ruleHeading4}><FontAwesomeIcon icon={faTools} className={netballStyle.iconss} /> Player Progression Resources:</h3>
                <p className={netballStyle.ruleText4}>Empower player development through innovative features such as tagging, collaborative note-sharing, and seamlessly integrated film clips.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className={netballStyle.rulesFh}>
                <img src="assets/images/netball2.jpg" alt="Basketball" className={netballStyle.imgFluid} style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default Netball
