import React from "react";
import "./Services.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "Sustainable & Affordable Construction",
    img: "./pictures/home.jpg",
    description:
      "We offer sustainable and affordable construction solutions for both residential and commercial projects. Our eco-friendly and durable gray structure construction ensures quality at competitive prices.",
    link: "/construction",
    button: "Construction Services",
  },
  {
    title: "Architectural Drawings & Design",
    img: "./pictures/drawing.jpg",
    description:
      "Our architectural and design services are meticulously crafted to bring your vision to life. We specialize in interior and exterior designs, ensuring every project is both functional and aesthetically pleasing.",
    link: "/consultant",
    button: "Consultant Services",
  },
  {
    title: "Project Management",
    img: "./pictures/project.webp",
    description:
      "From planning to execution, our construction management services ensure seamless project flow. We handle construction administration, project analysis, and vendor coordination to deliver projects on time and within budget.",
    link: "/survey",
    button: "Servey Services",
  },
  {
    title: "Safety Solutions",
    img: "./pictures/safe.webp",
    description:
      "Ensures top-tier safety standards across all construction projects. We specialize in risk assessments, compliance training, and on-site safety enforcement to protect workers and maintain regulatory compliance.",
    link: "/safety",
    button: "Safety Services",
  },
];

const ServicesContent = ({ services, navigate }) => (
  <div className="servicesContent">
    {services.map((service, index) => (
      <section className="service" key={index}>
        <h2>{service.title}</h2>
        <img src={service.img} alt={service.title} />
        <p>{service.description}</p>
        <button onClick={() => navigate(service.link)}>{service.button}</button>
      </section>
    ))}
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="servicesPage">
      <Nav />
      <div className="servicesTophead">
        <h1>Our Services</h1>
        <p>
          We provide top-notch architectural, construction, and real estate
          services tailored to meet your needs.
        </p>
      </div>
      <ServicesContent services={servicesData} navigate={navigate} />
      <div className="whyChooseUs">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Proven Track Record:</strong> 40+ years of industry
            experience delivering high-quality projects.
          </li>
          <li>
            <strong>Expert Guidance:</strong> Professional advice tailored to
            your unique needs.
          </li>
          <li>
            <strong>Creative Design:</strong> Innovative architectural solutions
            that reflect your style.
          </li>
          <li>
            <strong>Uncompromising Quality:</strong> Commitment to craftsmanship
            and attention to detail.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
