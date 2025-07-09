import React from "react";
import "./Contact.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contactPage">
      <Nav />
      <div className="contactTophead">
        <h1>Contact Chahat Construction</h1>
        <p>
          Chahat Construction is available on Facebook, Instagram, and WhatsApp
          (+92 307 5914466).
        </p>
      </div>
      <div className="contactDetails">
        <div className="contactInfo">
          <p className="contactTitle">📍 Chahat Construction</p>
          <p className="contactItem">
            <FaPhone className="icon phoneIcon" /> +92 307 5914466
          </p>
          <p className="contactItem">
            <FaWhatsapp className="icon whatsappIcon" />
            <a
              href="https://wa.me/923075914466"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </p>
          <p className="contactItem">
            <FaInstagram className="icon instaIcon" />
            <a
              href="https://www.instagram.com/chahat_construction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insta: chahat_construction
            </a>
          </p>
          <p className="contactItem">
            <FaFacebook className="icon fbIcon" />
            <a
              href="https://facebook.com/SyedBrothersLahore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook: Chahat Construction
            </a>
          </p>
          
        </div>

        <div className="maps">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=chaklala scheme 3&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
