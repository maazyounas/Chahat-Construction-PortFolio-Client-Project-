import React from "react";
import "./Consultant.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

// Consultant Services Data
const consultantServices = [
  {
    title: "Construction Mapping",
    img: "./pictures/construction-map.webp",
    description:
      "We provide advanced mapping solutions, including topographic surveys, land assessments, and site planning to ensure accuracy in construction projects.",
  },
  {
    title: "Architectural Drawings",
    img: "./pictures/drawing.jpg",
    description:
      "Our experts create detailed architectural and structural drawings, ensuring compliance with industry standards and client requirements.",
  },
  {
    title: "Quantity Surveying (QS)",
    img: "./pictures/qs.jpg",
    description:
      "We offer professional quantity surveying services, including cost estimation, material takeoff, and budget planning for construction projects.",
  },
];

// Services Component
const ConsultantServices = ({ services }) => (
  <div className="consultantServicesContainer">
    {services.map((service, index) => (
      <div className="consultantServiceCard" key={index}>
        <h2 className="consultantServiceTitle">{service.title}</h2>
        <img className="consultantServiceImage" src={service.img} alt={service.title} />
        <p className="consultantServiceDescription">{service.description}</p>
      </div>
    ))}
  </div>
);

const Consultant = () => {
  return (
    <div className="consultantWrapper">
      <Nav />
      <header className="consultantHeader">
        <h1 className="consultantTitle"> Consulting Services</h1>
        <p className="consultantDescription">
          We provide expert consulting services, including construction mapping, architectural drawings, and quantity surveying, ensuring precision and efficiency.
        </p>
      </header>

      {/* Services Section */}
      <ConsultantServices services={consultantServices} />

      <section className="whyChooseConsultant">
        <h2 className="consultantWhyTitle">Why Choose Our Consulting Services?</h2>
        <ul className="consultantWhyList">
          <li><strong>Expert Guidance:</strong> Professional consultants with industry experience.</li>
          <li><strong>Accurate Mapping:</strong> Cutting-edge tools for precise land assessments.</li>
          <li><strong>Detailed Drawings:</strong> Compliance with engineering and architectural standards.</li>
          <li><strong>Cost Optimization:</strong> Efficient budget planning with quantity surveying.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Consultant;
