import React from "react";
import "./Construction.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const servicesList = [
  {
    title: "Road Builders",
    img: "./pictures/road.jpg",
    description:
      "Our road construction services ensure durability and efficiency. From highways to residential roads, we provide top-quality asphalt and concrete solutions with the latest technology and machinery.",
  },
  {
    title: "Villas Construction",
    img: "./pictures/villa.jpg",
    description:
      "We specialize in designing and building luxury villas with modern architecture, high-end interiors, and sustainable materials to provide you with the perfect dream home.",
  },
  {
    title: "Multistory Builders",
    img: "./pictures/multistory.jpeg",
    description:
      "Our expertise in constructing high-rise buildings ensures robust structures, aesthetic designs, and cost-effective solutions for commercial and residential projects.",
  },
];

const ServicesSection = ({ services }) => (
  <div className="servicesContainer">
    {services.map((service, index) => (
      <div className="serviceCard" key={index}>
        <h2 className="serviceTitle">{service.title}</h2>
        <img className="serviceImage" src={service.img} alt={service.title} />
        <p className="serviceDescription">{service.description}</p>
      </div>
    ))}
  </div>
);

const Construction = () => {
  return (
    <div className="constructionWrapper">
      <Nav />
      <header className="constructionHeader">
        <h1 className="headerTitle"> Construction Services</h1>
        <p className="headerDescription">
          We specialize in various construction projects, including roads, villas, and multistory buildings, ensuring durability and modern design.
        </p>
      </header>

      <ServicesSection services={servicesList} />

      <section className="chooseUsSection">
        <h2 className="chooseUsTitle">Why Choose Us?</h2>
        <ul className="chooseUsList">
          <li><strong>Experienced Team:</strong> Skilled professionals with years of expertise in construction.</li>
          <li><strong>Quality Assurance:</strong> We use high-grade materials and innovative techniques.</li>
          <li><strong>Timely Completion:</strong> Ensuring projects are delivered on schedule.</li>
          <li><strong>Client Satisfaction:</strong> Customer-focused approach with tailored solutions.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
