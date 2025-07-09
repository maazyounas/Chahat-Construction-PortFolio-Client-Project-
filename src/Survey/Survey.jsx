import React from 'react';
import "./Survey.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Survey = () => {
  return (
    <div className="surveyPage">
      <Nav />
      <div className="surveyTophead">
        <h1>Land Survey Services</h1>
        <p>
          At Chahat Construction, we provide professional land survey services
          to ensure accurate measurements.
        </p>
      </div>

      <div className="surveyContent">
        <h2>Our Land Survey Services</h2>
        <ul>
          <li>Boundary and property line surveys</li>
          <li>Topographic surveys for site planning</li>
          <li>Construction staking for accurate building placement</li>
          <li>Land subdivision and mapping</li>
        </ul>
      </div>

      <div className="qcContent">
        <h2>Quality Control in Land Surveys</h2>
        <p>
          We adhere to strict quality control measures in every survey project.
          Our experienced surveyors ensure compliance with legal and industry
          standards, providing reliable data for precise planning and
          development.
        </p>
        <ul>
          <li>Use of cutting-edge surveying equipment</li>
          <li>Compliance with national and local regulations</li>
          <li>Thorough data verification and accuracy checks</li>
          <li>Professional reporting and documentation</li>
        </ul>
      </div>
      
      <Footer />
    </div>
  );
};

export default Survey;