import React, { useState } from "react";
import "./Homepage.css";
import "./navbar.css";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="homepage">
      <nav>
        <div className="nav-logo">
          <img src={require("./images/S (1).png")} alt="SLU Logo" />
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="logo-image">
        <h1>Sarom Logistics and Unloading Ltd.</h1>
        <p>
          We provide reliable and efficient logistics services tailored to meet
          your requirements.
        </p>
      </div>
      <div className="buttons">
        <button
          className="get-started"
          onClick={() => handleButtonClick("contact")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
