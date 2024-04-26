import React, { useRef, useEffect, useState } from 'react';
import contactStyle from './Contact.module.css'; // Import CSS module
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.init("fIhHFJiGjCy__Rsrj");
    emailjs
      .sendForm('service_k49jwwi', 'template_93x28a9', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setShowModal(true);
          form.current.reset();
          setTimeout(() => {
            setShowModal(false);
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          alert('An error occurred, please try again later.');
        },
      );
  };

  return (
    <>
      <div className={contactStyle.container}> {/* Use CSS module */}
        <div className={contactStyle.innerwrap}> {/* Use CSS module */}
          <section className={`${contactStyle.section1} clearfix`} data-aos="fade-up"> {/* Use CSS module */}
            <div className={contactStyle.textcenter}> {/* Use CSS module */}
              <span className={contactStyle.shtext}>Contact Us</span>
              <span className={contactStyle.seperator}></span>
              <h1>Drop Us a Mail</h1>
            </div>
          </section>

          <section className={`${contactStyle.section2} clearfix`}> {/* Use CSS module */}
            <div className={`${contactStyle.col2} ${contactStyle.column1} ${contactStyle.first}`}> {/* Use CSS module */}
              <div className={contactStyle.sec2map}>
                {/* Google Map */}
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.043472937807!2d73.76290777599428!3d19.964673923472485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95a018d6f29d%3A0x2514ae74028039a5!2sPrivan%20Sports%20Analyzer!5e0!3m2!1sen!2sin!4v1713082151721!5m2!1sen!2sin" width="100%" height="550" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
            <div className={`${contactStyle.col2} ${contactStyle.column2} ${contactStyle.last}`}> {/* Use CSS module */}
              <div className={contactStyle.sec2innercont}> {/* Use CSS module */}
                <div className={contactStyle.sec2addr}> {/* Use CSS module */}
                  <p>1st floor, Jay Plaza, Back side of Domino's, Privan Sports analyer Pvt Ltd, Rane Nagar, Nashik, Maharashtra 422009</p>
                  <p><span className={contactStyle.collig}>Phone :</span> +91 976885083</p>
                  <p><span className={contactStyle.collig}>Email :</span> yashpatil121199@gmail.com</p>
                </div>
              </div>
              <div className={contactStyle.sec2contactform}> {/* Use CSS module */}
                <h3 className={contactStyle.sec2frmtitle}>Want to Know More?? Drop Us a Mail</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className={`${contactStyle.clearfix}`}> {/* Use CSS module */}
                    <input className={`${contactStyle.col2} ${contactStyle.first}`} type="text" placeholder="First Name" name="firstName" required />
                    <input className={`${contactStyle.col2} ${contactStyle.last}`} type="text" placeholder="Last Name" name="lastName" required/>
                  </div>
                  <div className={`${contactStyle.clearfix}`}> {/* Use CSS module */}
                    <input className={`${contactStyle.col2} ${contactStyle.first}`} type="email" placeholder="Email" name="email" required/>
                    <input className={`${contactStyle.col2} ${contactStyle.last}`} type="text" placeholder="Contact Number" name="contactNumber" required/>
                  </div>
                  <div className={`${contactStyle.clearfix}`}> {/* Use CSS module */}
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your message here..." required></textarea>
                  </div>
                  <div className={`${contactStyle.clearfix}`}><input type="submit" value="Send" /></div>
                </form>
                {loading && <div className={contactStyle.loader}></div>} {/* Use CSS module */}
              </div>
            </div>
          </section>
        </div>
      </div>
      {showModal && (
        <div className={contactStyle.modal}> {/* Use CSS module */}
          <div className={contactStyle.modalContent}> {/* Use CSS module */}
            {/* <span className={contactStyle.close} onClick={() => setShowModal(false)}>&times;</span> */}
            <p>Thank you for connecting!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact;
