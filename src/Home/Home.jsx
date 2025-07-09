import { useState, useEffect } from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../chatbot";

const images = [
  "/pictures/homepic1.jpg",
  "/pictures/home2.jpg",
  "/pictures/home3.jpg",
];

const text =
  "From Concept To Creation\n Our Passion, Professionalism & Critical Analysis\nWe Bring You Back to Us";

const servicesData = [
  {
    img: "./pictures/construction.jpg",
    title: "Construction Services",
    description:
      "We specialize in high-quality building solutions, from residential and commercial structures to infrastructure projects. Our team ensures excellence in every aspect, from foundation to finishing.",
    link: "/construction",
  },
  {
    img: "./pictures/consultant.avif",
    title: "Consultancy Services",
    description:
      "Our expert consultants provide professional guidance in real estate development, project planning, cost estimation, and regulatory compliance for maximum returns.",
    link: "/consultant",
  },
  {
    img: "./pictures/maintain.jpg",
    title: "Safety Services",
    description:
      "We follow strict safety protocols, ensuring compliance with industry standards to protect workers and occupants. Our services include site inspections, risk assessments, & safety measures.",
    link: "/safety",
  },
  {
    img: "./pictures/survey.jpeg",
    title: "Land Surveying Services",
    description:
      "We offer professional land surveying services, including boundary mapping, topographic analysis, and site feasibility studies for optimal land utilization and legal compliance.",
    link: "/survey",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="homepage">
      <Nav />

      <div className="home-container">
        <div className="image-wrapper">
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            className="slideshow-image"
            loading="lazy"
          />
          <div className="overlay-text">
            {text.split("\n").map((line, index) => (
              <p key={index} className={index === 1 ? "highlighted-text" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="description">
          <h3>Chahat Construction Being The</h3>
          <h1>BEST CONSTRUCTION COMPANY IN PAKISTAN</h1>
          <h2>
            look forward a strategic (long-term) relationship with its customers
          </h2>
          <p>
            At Chahat Construction, we maintain the highest levels of
            professionalism, integrity, and fairness in our relationships with
            suppliers, subcontractors, and customers. Our mission is to provide
            top-quality construction services at competitive prices.
          </p>
        </div>

        <div className="services">
          <div className="serviceHeading">
            <h2>Our Services</h2>
          </div>

          <div className="servicecat">
            {servicesData.map((service, index) => (
              <div className="ServiceCatagory" key={index}>
                <img src={service.img} alt={service.title} loading="lazy" />
                <span>{service.title}</span>
                <p>{service.description}</p>
                <button
                  className="readMorebtn"
                  onClick={() => navigate(service.link)}
                >
                  Read More...
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="ourinfo">
          <h1>Who we are</h1>
          <span>Put us to the test, we are better than the rest.</span>
          <p>
            We take pride in being one of the best companies dealing with
            Construction, Engineering & Consultancy, having achieved remarkable
            growth over the years and contributing significantly to the
            country's development. The Company has attained prominence as the
            best construction company in Pakistan through competence,
            competitiveness, and timely delivery with the highest quality
            covering all through Pakistan. We have a long tradition of serving
            our valued clients to complete satisfaction through efficient
            management and excellent artistry, which we continue to maintain
            with our untiring efforts.
          </p>
          <p>
            We continuously strive for innovation and enhanced efficiency.
            Chahat Construction are the preferred choice of many clients because
            of its reliability and commitment to quality. As we look to the
            years ahead, we renew our pledge to remain committed to excellence,
            keep abreast of changes and innovations, adopt better management and
            construction techniques, and successfully overcome all challenges
            before us.
          </p>
        </div>

        <div className="whyChose">
          <h1>Why Choose Chahat Construction?</h1>
          {["Proven track record of excellence in residential and commercial projects.",
            "Successful history of serving commercial and residential clients.",
            "Expert team of architects, engineers, and project managers.",
            "Customer-focused approach with transparent communication.",
            "Competitive pricing with no compromise on quality.",
            "Use of high-quality materials ensuring durability and longevity."]
          .map((point, i) => <p key={i}>{point}</p>)}
        </div>
      </div>
      <Chatbot/>
      <Footer />
    </div>
  );
};

export default Home;
