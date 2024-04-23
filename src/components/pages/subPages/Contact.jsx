import React, { useRef, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'; // import emailjs library
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {
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

  const form = useRef(); // create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault();

    // Initialize EmailJS with your user ID
    emailjs.init("fIhHFJiGjCy__Rsrj");

    emailjs
      .sendForm('service_k49jwwi', 'template_93x28a9', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('An error occurred, please try again later.');
        },
      );
  };

  return (
    <>
      <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix" data-aos="fade-up">
            <div className="textcenter">
              <span className="shtext">Contact Us</span>
              <span className="seperator"></span>
              <h1>Drop Us a Mail</h1>
            </div>
          </section>

          <section className="section2 clearfix">
            <div className="col2 column1 first">
              <div className="sec2map">
                {/* Google Map */}
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.043472937807!2d73.76290777599428!3d19.964673923472485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95a018d6f29d%3A0x2514ae74028039a5!2sPrivan%20Sports%20Analyzer!5e0!3m2!1sen!2sin!4v1713082151721!5m2!1sen!2sin" width="100%" height="550" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

              </div>
            </div>
            <div className="col2 column2 last">
              <div className="sec2innercont">
                <div className="sec2addr">
                  <p>1st floor, Jay Plaza, Back side of Domino's, Privan Sports analyer Pvt Ltd, Rane Nagar, Nashik, Maharashtra 422009</p>
                  <p><span className="collig">Phone :</span> +91 976885083</p>
                  <p><span className="collig">Email :</span> yashpatil121199@gmail.com</p>
                  {/* <p><span className="collig">Fax :</span> +91 97688509</p> */}
                </div>
              </div>
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="clearfix">
                    <input className="col2 first" type="text" placeholder="First Name" name="firstName" />
                    <input className="col2 last" type="text" placeholder="Last Name" name="lastName" />
                  </div>
                  <div className="clearfix">
                    <input className="col2 first" type="email" placeholder="Email" name="email" />
                    <input className="col2 last" type="text" placeholder="Contact Number" name="contactNumber" />
                  </div>
                  <div className="clearfix">
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your message here..."></textarea>
                  </div>
                  <div className="clearfix"><input type="submit" value="Send" /></div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact;
