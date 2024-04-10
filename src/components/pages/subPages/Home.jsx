import React from 'react';
import { useState } from 'react';
import CustomNavbar from "../NavBars";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <div className="bg-image-container">
      <div className="heading1">
        <span className='sport'>Sports</span>
        <span className='analysis'>Analysis</span>
      </div>
      <img className="bg-image img-fluid" src="assets/images/pngwing.png" alt="" />
      <div className="overlay">
        <div className="text-white">
          <p className='text-right'>Lorem ipsum dolor, sit amet consectetur  elit. <br /> nulla magni sunt quos numquam unde fugit?</p>
        </div>
        <a className='scroll-down'>Scroll down <FontAwesomeIcon icon={faAngleDown} /></a>

      </div>
    </div>

    </div>
  );
}

export default Home;
