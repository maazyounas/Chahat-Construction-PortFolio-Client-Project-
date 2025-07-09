import React from "react";
import "./About.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const services = [
  {
    title: "Construction Services",
    img: "./pictures/construct.jpg",
    desc: "Our expert construction team at Syed Brothers ensures high-quality building solutions for residential and commercial projects. From foundation to finishing, we manage every aspect with precision, efficiency, and durability."
  },
  {
    title: "Consultancy Services",
    img: "./pictures/consultant.jpg",
    desc: "We provide expert guidance on architectural planning, project management, and construction strategies, optimizing cost, efficiency, and design while maintaining top quality."
  },
  {
    title: "Safety Services",
    img: "./pictures/safety.jpg",
    desc: "We prioritize safety, ensuring compliance with regulations. Our risk assessments and preventive measures safeguard workers and structures."
  },
  {
    title: "Land Surveying Services",
    img: "./pictures/surv.jpg",
    desc: "Our land surveying services offer accurate property boundaries, topographic analysis, and construction planning using advanced technology."
  }
];

const About = () => (
  <div className="aboutPage">
    <Nav />
    <div className="tophead">
      <h1>About Chahat Construction</h1>
      <p>Chahat Construction is a leading construction and architectural firm in Pakistan, specializing in high-quality designs, durable structures, and innovative solutions for residential and commercial projects.</p>
    </div>
    
    <div className="subTitle">
      <h2>Our Legacy</h2>
      <p>With decades of experience, Chahat Construction has successfully completed numerous projects, including architectural design, construction, and real estate consultation. Our expertise in urban developments such as Bahria Town and DHA cements our industry leadership.</p>
      
      <h2>Our Expertise</h2>
      {services.map(({ title, img, desc }) => (
        <div className="experties" key={title}>
          <div className="left"><img src={img} alt={title} /></div>
          <div className="right"><h3>{title}</h3><p>{desc}</p></div>
        </div>
      ))}
      
      <h2>Our Approach</h2>
      <p>We adopt a client-focused approach, ensuring precision in every project from design to execution. Our team integrates modern MEP (Mechanical, Electrical, and Plumbing) systems for efficiency, safety, and sustainability.</p>
      
      <h2>Our Mission</h2>
      <p>To uphold professionalism, integrity, honesty, and fairness with our suppliers, subcontractors, and clients, delivering top-quality construction services at competitive prices.</p>
      
      <h2>Our Core Values</h2>
      <ul className="about-list">
        <li><strong>Integrity:</strong> Transparent and honest dealings with clients.</li>
        <li><strong>Client Focus:</strong> Prioritizing customer needs at every stage.</li>
        <li><strong>Quality Craftsmanship:</strong> Excellence in design and construction.</li>
        <li><strong>Sustainability:</strong> Building eco-friendly and long-lasting structures.</li>
      </ul>
      
      <h2>Why Choose Us?</h2>
      <p>We provide top-tier architectural and construction services with expertise, innovation, and commitment to quality. Whether for a dream home or a commercial space, we bring visions to life with precision and care.</p>
      
      <h2>Contact Us</h2>
      <p>Let’s discuss your project today! Reach out at <strong>contact: landchahat@gmail.com</strong></p>
    </div>
    <Footer />
  </div>
);

export default About;
