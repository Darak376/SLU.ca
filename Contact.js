import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_j21g0zq"; // Enter your EmailJS Service ID
const TEMPLATE_ID = "template_mdfledl"; // Enter your EmailJS Template ID
const PUBLIC_KEY = "nuNdhIlZKB27oXh8N"; // Enter your EmailJS Public Key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    number: "",
    email: "",
    containerSize: "",
    numOfBoxes: 0,
    loadType: "",
    message: "",
  });

  const [showHoverScreen, setShowHoverScreen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIncrement = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      numOfBoxes: prevFormData.numOfBoxes + 1,
    }));
  };

  const handleDecrement = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      numOfBoxes: Math.max(0, prevFormData.numOfBoxes - 1),
    }));
  };

  const handleLoadTypeChange = (type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      loadType: type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, company, number, email, message } = formData;
    if (!name || !company || !number || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Use EmailJS to send the form data
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setShowHoverScreen(true); // Show hover screen on successful submission
      })
      .catch((error) => {
        console.log(error.text);
        alert("Something went wrong!");
      });

    e.target.reset(); // Reset the form after submission
  };

  const handleOkay = () => {
    setShowHoverScreen(false);
    setFormData({
      name: "",
      company: "",
      number: "",
      email: "",
      containerSize: "",
      numOfBoxes: 0,
      loadType: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      {showHoverScreen && (
        <div className="hover-screen">
          <div className="hover-screen-content">
            <img
              src={require("../images/tick.jpeg")}
              alt="Tick Icon"
              className="tick-icon"
            />
            <h2>Form Submitted</h2>
            <button onClick={handleOkay} className="okay-button">
              Okay
            </button>
          </div>
        </div>
      )}
      <div className="left-side">
        <img src={require("../images/logistics.avif")} alt="Contact" />
      </div>
      <div id="contact" className="right-side">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:*
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            />
          </label>
          <label>
            Company Name:*
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            />
          </label>
          <label>
            Contact Number:*
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            />
          </label>
          <label>
            Email:*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            />
          </label>
          <label>
            Container Size:
            <select
              name="containerSize"
              value={formData.containerSize}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            >
              <option value="">Select a size</option>
              <option value="20ft">20ft</option>
              <option value="40ft">40ft</option>
              <option value="45ft">45ft</option>
              <option value="53ft">53ft</option>
            </select>
          </label>
          <label>
            Load Type:
            <select
              value={formData.loadType}
              onChange={(e) => handleLoadTypeChange(e.target.value)}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
              }}
            >
              {[
                "Select Load Type",
                "Boxes",
                "Tires",
                "Other Load (Please Specify in Message Tab)",
              ].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            Number of Articles:
            <div className="number-input">
              <button type="button" onClick={handleDecrement}>
                -
              </button>
              <input
                type="number"
                name="numOfBoxes"
                value={formData.numOfBoxes}
                onChange={handleChange}
                min="0"
                style={{
                  border: "2px solid lightcoral",
                  backgroundColor: "white",
                  width: "100px",
                  padding: "10px",
                }}
              />
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>
          </label>
          <label>
            Message:*
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                border: "2px solid lightcoral",
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
                height: "150px",
              }}
            />
          </label>
          <button type="submit" className="get-quote">
            Get Quote
          </button>
          <a
            href="https://wa.me/15876474000?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Chat with us on WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
