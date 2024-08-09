import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-item">
          <div className="about-divider"></div>
          <h1
            className="about-h"
            style={{ color: "#c90000", fontSize: "42px" }}
          >
            About Us
          </h1>
          <br />
          <br />
          <div className="about-text">
            <h2 className="about-title">Our Company</h2>
            <p className="about-description">
              We specialize in professional lumper services and container
              handling solutions for logistics, shipping, and warehousing
              sectors.
            </p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-divider"></div>
          <div className="about-text">
            <h2 className="about-title">Key Benefits</h2>
            <ul className="about-description">
              <li>Expertise and Experience</li>
              <li>Cost Efficiency</li>
              <li>Time Savings</li>
              <li>Safety and Security</li>
            </ul>
          </div>
        </div>
        <div className="about-item">
          <div className="about-divider"></div>
          <div className="about-text">
            <h2 className="about-title">Target Market</h2>
            <ul className="about-description">
              <li>Logistics Companies</li>
              <li>Shipping Companies</li>
              <li>Warehousing Facilities</li>
              <li>Manufacturers and Distributors</li>
            </ul>
          </div>
        </div>
        <div className="about-item">
          <div className="about-divider"></div>
          <div className="about-text">
            <h2 className="about-title">Operational Strategy</h2>
            <ul className="about-description">
              <li>Trained Workforce</li>
              <li>Advanced Equipment</li>
              <li>Quality Control</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
        <div className="about-item">
          <div className="about-divider"></div>
          <div className="about-text">
            <h2 className="about-title">Vision and Mission</h2>
            <ul className="about-description">
              <li>
                Vision: Leading provider of lumper and container handling
                solutions.
              </li>
              <li>
                Mission: Enhance supply chain operations with professional
                services.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-image-container">
        <img
          src={require("../images/warehouse2.jpeg")}
          alt="Logo"
          className="about-image"
        />
      </div>
      <div className="footer-links" />
    </div>
  );
};

export default About;
