import React ,{useState} from 'react';

import './Css/Fieldhockey.css'; // Import your CSS file for styling
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faChartBar, faHeart, faTools } from '@fortawesome/free-solid-svg-icons';
const Fieldhockey = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
    const [color , setColor] = useState('');
    const [ whitcolor, setwhitecolor] = useState('');

    const handleBlackClick = () => {
        setBackgroundColor('black');
        setColor('#27967A');
        setwhitecolor('white');
    };

    const handleBlueClick = () => {
        setBackgroundColor('skyblue');
        setColor('white');
    };


    const handlegreenClick =() => {
        setBackgroundColor('#27967A');
        setColor('white');
    }


  return (


    <>

      <div className="fieldhockey-section">
        <div className="overlay"></div>
        <div className="text-container">
          <h1 className='fh-h1'> Field Hockey</h1>
          <span
            className="animated-line"
            style={{
              display: 'inline-block',
              width: '0%', // Initially set width to 0
              backgroundColor: '#27967A',
              height: '5px',
              marginBottom: '20px',
              transition: 'width 1s ease' // Transition for smooth animation
            }}
          />

          <h3 className='fh-h3'>Field Hockey Frenzy: <br /> Where the Game Comes Alive!</h3>
        </div>
      </div>



      <section className='info-fh'  style={{ backgroundColor: backgroundColor }}>
        <Container className="basketball-fh">
          <Row>
            {/* Left side with image */}
            <Col md={6}>
              <div className="custom-shadow-fh">
                <img src="assets/images/fieldimg.jpg" alt="Basketball" className="img-fluid" style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>

            {/* Right side with text */}
            <Col md={6}>
              <div className="text-content-fh">
                <h3 className="confg-heading1" style={{color: color}}>Revolutionizing Field Hockey Player Tracking:</h3>
                <p className="confg-text" style={{color: whitcolor}}>ultimate solution for monitoring athlete performance in field hockey. We're redefining the standard with groundbreaking insights into field hockey-specific movements, workload management, and more.
                </p>
                <h3 className="confg-heading2" style={{color: color}}>Automatic Identification Tracking:</h3>
                <p className="confg-text2" style={{color: whitcolor}}>Leveraging cutting-edge inertial sensors and advanced machine learning algorithms, Catapult Vector automatically tracks every facet of player performance on the field hockey pitch.</p>
                <h3 className="confg-heading3" style={{color: color}}>Unprecedented Insights:</h3>
                <p className="confg-text3" style={{color: whitcolor}}>Catapult Vector offers unparalleled insights tailored specifically to the demands of field hockey. Beyond conventional metrics, our technology delves into the nuances of the sport.</p>
                <h3 className="confg-heading4" style={{color: color}}>Empowering the Future of Field Hockey Performance:</h3>
                <p className="confg-text4" style={{color: whitcolor}}>With Catapult Vector, you're not just collecting data – you're shaping the future of field hockey performance. </p>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      {/* second container  */}



      <section style={{ backgroundColor: backgroundColor }}>
        <Container className="rules-main"  >
          <Row>
            <Col md={6}>
              <div >
                <h3 className="rule-heading1" style={{color: color}}>  <FontAwesomeIcon icon={faHeart} className='iconss' />Strengths and Weaknesses :</h3>
                <p className="rule-text" style={{color: whitcolor}}>The platform's unlimited customization enables coaches to analyze data according to their preferences, enhancing flexibility and adaptability to various playing styles and strategies.
                </p>
                <h3 className="rule-heading2" style={{color: color}}>  <FontAwesomeIcon icon={faChartBar} className='iconss' /> Customizable Analysis:</h3>
                <p className="rule-text2" style={{color: whitcolor}}>The platform allows for unlimited customization, empowering coaches to analyze data according to their preferences and strategies.</p>
                <h3 className="rule-heading3" style={{color: color}}> <FontAwesomeIcon icon={faBinoculars} className='iconss' /> Opponent Scouting:</h3>
                <p className="rule-text3" style={{color: whitcolor}}>The ability to scout opponents comprehensively provides teams with a competitive edge. By identifying opponents' weaknesses, teams can develop targeted strategies to exploit those vulnerabilities and enhance their chances of success on the field.</p>
                <h3 className="rule-heading4" style={{color: color}}> <FontAwesomeIcon icon={faTools} className='iconss' /> Player Development Tools:</h3>
                <p className="rule-text4" style={{color: whitcolor}}>The platform facilitates player development by offering features such as tagging, note-sharing, and integrated film clips. </p>
              </div>
            </Col>
            <Col md={6}>
              <div className=" rules-fh">
                <img src="assets/images/fieldimg.jpg" alt="Basketball" className="img-fluid" style={{ borderRadius: "8px", width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="color-boxes">
                    <div className="yellow-box" onClick={handleBlackClick}></div>
                    <div className="blue-box" onClick={handleBlueClick}></div>
                    <div className="lightgreen-box" onClick={handlegreenClick}></div>
                </div>
    </>
  );
}

export default Fieldhockey;
