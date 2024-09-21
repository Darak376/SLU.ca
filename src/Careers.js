import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_xrdmz2i";
const TEMPLATE_ID = "template_q4gs6m9";
const PUBLIC_KEY = "QURQTolDHtnhSd9QD";

const AvailabilityForm = () => {
  const navigate = useNavigate();

  const [availability, setAvailability] = useState({
    M: false,
    T: false,
    W: false,
    Th: false,
    F: false,
    Sa: false,
    Su: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    resume: "",
    checkbox: false,
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phone, email, resume, checkbox } = formData;

    if (!name || !phone || !email || !checkbox) {
      alert("Please fill in all required fields.");
      return;
    }

    const [firstName, lastName] = name.split(" ");

    const formDataToSend = {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email,
      phoneNumber: phone,
      resume: resume || "N/A",
      checkbox: checkbox ? "Yes" : "No",
      availability: Object.keys(availability)
        .filter((day) => availability[day])
        .join(", "),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formDataToSend, PUBLIC_KEY);
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong!");
    }
  };

  const handleOkay = () => {
    setShowConfirmation(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      resume: "",
      checkbox: false,
    });
    setAvailability({
      M: false,
      T: false,
      W: false,
      Th: false,
      F: false,
      Sa: false,
      Su: false,
    });
    navigate("/");
  };

  return (
    <div
      id="careers"
      style={{
        display: "flex",
        minHeight: "90vh",
        backgroundColor: "#ffff",
        flexWrap: "wrap", // Makes it wrap on smaller devices
      }}
    >
      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={require("../images/tick.jpeg")}
              alt="Tick Icon"
              style={{ width: "50px", height: "50px", marginBottom: "10px" }}
            />
            <h2>Form Submitted</h2>
            <button
              onClick={handleOkay}
              style={{
                backgroundColor: "#c90000",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#8b0000";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#c90000";
                e.target.style.color = "white";
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          flex: "1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "300px",
        }}
      >
        <img
          src={require("../images/logistics.avif")}
          alt="Contact"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1.71rem",
          textAlign: "center",
          maxWidth: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "22px", // Reduced size for responsiveness
            width: "85.5%",
            maxWidth: "345px",
            textAlign: "left",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          Be Part of Something
        </h1>
        <h1
          style={{
            fontSize: "28px", // Reduced size for responsiveness
            width: "85.5%",
            maxWidth: "345px",
            textAlign: "left",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          <strong>"BIGGER"</strong>
        </h1>
        <p
          style={{
            fontSize: "18px", // Reduced size for responsiveness
            width: "85.5%",
            maxWidth: "345px",
            textAlign: "left",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          JOIN OUR TEAM!!
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "85.5%",
            maxWidth: "345px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                fontSize: "14px", // Reduced size for responsiveness
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Name: *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                padding: "0.25rem",
                borderRadius: "17.12px",
                border: "1.71px solid red",
                outline: "none",
                backgroundColor: "white",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c90000")}
              onBlur={(e) => (e.target.style.borderColor = "red")}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Phone Number: *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={{
                padding: "0.25rem",
                borderRadius: "17.12px",
                border: "1.71px solid red",
                outline: "none",
                backgroundColor: "white",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c90000")}
              onBlur={(e) => (e.target.style.borderColor = "red")}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Email: *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                padding: "0.25rem",
                borderRadius: "17.12px",
                border: "1.71px solid red",
                outline: "none",
                backgroundColor: "#ffff",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c90000")}
              onBlur={(e) => (e.target.style.borderColor = "red")}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Availability: *
            </label>
            <div
              style={{
                display: "flex",
                gap: "8.56px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(availability).map((day) => (
                <label
                  key={day}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34.26px",
                    height: "34.26px",
                    backgroundColor: availability[day] ? "#c90000" : "#e0e0e0",
                    borderRadius: "50%",
                    color: availability[day] ? "white" : "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name={day}
                    checked={availability[day]}
                    onChange={handleChange}
                    hidden
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                fontSize: "14px", // Reduced size for responsiveness
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Resume: (Optional)
            </label>
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleInputChange}
              placeholder="Link of your resume"
              style={{
                padding: "0.25rem",
                borderRadius: "17.12px",
                border: "1.71px solid red",
                outline: "none",
                backgroundColor: "white",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c90000")}
              onBlur={(e) => (e.target.style.borderColor = "red")}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ fontSize: "12px" }}>
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleInputChange}
              />{" "}
              Are you legally entitled to work in Canada : *
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: "0.5rem 1.5rem", // Reduced button size
              backgroundColor: "white",
              color: "black", // Text color black
              border: "2px solid red", // Red border
              borderRadius: "25.68px",
              cursor: "pointer",
              fontSize: "16px",
              marginBottom: "0.85rem",
              width: "70%", // Reduced width
              margin: "0 auto", // Center the button
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c90000";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
            }}
          >
            Submit
          </button>
          <div
            className="divider"
            style={{
              margin: "0.85rem 0",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              color: "black",
            }}
          >
            <hr
              style={{ flex: 1, border: "none", borderTop: "1px solid black" }}
            />
            <span style={{ padding: "0 10px" }}>OR</span>
            <hr
              style={{ flex: 1, border: "none", borderTop: "1px solid black" }}
            />
          </div>
          <p
            className="form-email"
            style={{
              fontSize: "0.85rem",
              color: "black",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Email your details and resume to{" "}
            <a
              style={{ color: "blue", textDecoration: "none" }}
              href="mailto:slu.careers@outlook.com"
            >
              slu.careers@outlook.com
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityForm;
