import React from "react";
import "./Safety.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Safety = () => {
  return (
    <div className="safetyPage">
      <Nav />
      <div className="safetyTophead">
        <h1>Safety & Quality Control Services</h1>
        <p>
          Safety is our top priority at Chahat Construction.
        </p>
      </div>
      <div className="safetyContent">
        <h2>Our Safety Standards</h2>
        <p>
          At Chahat Construction, safety is our top priority. We implement
          strict safety protocols to ensure the well-being of our workers,
          clients, and the community. Our safety measures include:
        </p>
        <ul>
          <li>Regular safety training programs for all employees</li>
          <li>Strict compliance with international safety standards</li>
          <li>Usage of high-quality protective gear and equipment</li>
          <li>On-site risk assessment and hazard prevention</li>
        </ul>
      </div>
      <div className="qcContent">
        <h2>Quality Control Services</h2>
        <p>
          We are committed to maintaining the highest quality standards in every
          project we undertake. Our Quality Control (QC) services include:
        </p>
        <ul>
          <li>Use of premium-grade materials</li>
          <li>Thorough inspection at each stage of construction</li>
          <li>Adherence to industry standards and best practices</li>
          <li>Quality assurance checks to ensure durability and safety</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
