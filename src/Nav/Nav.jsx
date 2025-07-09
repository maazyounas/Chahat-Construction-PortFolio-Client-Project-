import React, { useState } from "react";
import "./Nav.css";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

const TopBar = () => (
  <div className="topBar">
    <div className="topBarLeft">
      <p><FaPhoneAlt /> +92 300-7069806</p>
      <p><FaEnvelope /> landchahat@gmail.com</p>
    </div>
    <div className="topBarRight">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://www.instagram.com/chahat_construction/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  </div>
);

const Nav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = (path) => {
    setShowMenu(false);
    navigate(path); 
    window.scrollTo(0, 0);
  };

  return (
    <div className="navContainer">
      <TopBar />

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navLogo" onClick={() => navigate("/home")}>
          Chahat <BsFillBuildingsFill />
        </div>

        {/* Desktop Menu */}
        <ul className={`navLinks ${showMenu ? "open" : ""}`}>
          <li><Link to="/about" className="navLink" onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="/services" className="navLink" onClick={closeMenu}>SERVICES</Link></li>
          <li><Link to="/portfolio" className="navLink" onClick={closeMenu}>PORTFOLIO</Link></li>
          <li><Link to="/contact" className="navLink" onClick={closeMenu}>CONTACT US</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menuButton" onClick={toggleMenu}>
          <TiThMenuOutline />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
