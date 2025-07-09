import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <p>
            We provide real estate, architectural design, construction, and
            interior design services all across Pakistan.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="footer-section">
          <h3>Our Locations</h3>
          <ul>
            <li>
              <FaMapMarkerAlt />  Main Commercial Road Palm City Near Chaklala Scheme III,   Rawalpindi. <br />
              <FaPhoneAlt /> +92 300 1313135, +92 321 4524254, +92 300 7069806
            </li>
            
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope /> landchahat@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> +92 300 7069806
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Chahat Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
