import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Services.css'; // Import your CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  // Define the content array with objects representing each row
  const content = [
    {
      imageUrl: process.env.PUBLIC_URL + './assets/images/bg-1.jpg', // Use local image path
      heading: 'Hello World',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac elit id libero finibus consectetur. Quisque sollicitudin lorem eget ligula bibendum, id tempus dolor lacinia. Nulla facilisi. Integer pharetra urna nec elit placerat, et volutpat ligula consectetur. Sed varius, odio eget ultricies rutrum, sapien leo eleifend odio, eget laoreet lectus urna et est. Sed in felis sed ex commodo mattis.'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/assets/images/logo.png',
      heading: 'Hello Lalit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac elit id libero finibus consectetur. Quisque sollicitudin lorem eget ligula bibendum, id tempus dolor lacinia. Nulla facilisi. Integer pharetra urna nec elit placerat, et volutpat ligula consectetur. Sed varius, odio eget ultricies rutrum, sapien leo eleifend odio, eget laoreet lectus urna et est. Sed in felis sed ex commodo mattis.'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/assets/images/logo.png',
      heading: 'Hello Sunny',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac elit id libero finibus consectetur. Quisque sollicitudin lorem eget ligula bibendum, id tempus dolor lacinia. Nulla facilisi. Integer pharetra urna nec elit placerat, et volutpat ligula consectetur. Sed varius, odio eget ultricies rutrum, sapien leo eleifend odio, eget laoreet lectus urna et est. Sed in felis sed ex commodo mattis.'
    }
  ];

  return (
    <>
      <Container>
        <>
          <Row className="justify-content-around mt-5">
            <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
              <i className="fas fa-coffee fa-lg p-4"></i>
              <h>hello</h>
              <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
              <i className="fas fa-coffee fa-lg p-4"></i>
              <h>hello</h>

              <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center p-5 custom-col">
              <i className="fas fa-coffee fa-lg p-4"></i>
              <h>hello</h>

              <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, adipisci?</p>
            </Col>

          </Row>
          {/* Map over the content array to generate rows dynamically */}
          {content.map((item, index) => (
            <Row key={index} className="RowData">
              {/* Alternate the image and text columns based on the row index */}
              {(index % 2 === 0) ? (
                <>
                  {/* Image column */}
                  <Col md={6} className="service-image">
                    <div className="content-wrapper">
                      <img src={item.imageUrl} alt="placeholder" />
                    </div>
                  </Col>
                  {/* Text column */}
                  <Col md={6} className="service-text">
                    <div className="content-wrapper">
                      <h4 className="textHead">{item.heading}</h4>
                      <p className="textL">{item.text}</p>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  {/* Text column */}
                  <Col md={6} className="service-text">
                    <div className="content-wrapper">
                      <h4 className="textHead">{item.heading}</h4>
                      <p className="textL">{item.text}</p>
                    </div>
                  </Col>
                  {/* Image column */}
                  <Col md={6} className="service-image">
                    <div className="content-wrapper">

                      <img src={item.imageUrl} alt="placeholder" />
                    </div>
                  </Col>
                </>
              )}
            </Row>
          ))}
        </>
      </Container>
    </>
  );
}

export default Services;
