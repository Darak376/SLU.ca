// Carousel.js
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import image1 from "../images/Image1.jpg";
import image2 from "../images/Image2.jpg";
import image3 from "../images/Image3.jpg";
import image4 from "../images/Image5.jpg";
import image5 from "../images/image11.jpg";
import image6 from "../images/Image10.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImageClass = (index) => {
    if (index === currentIndex) {
      return "carousel-image center-image";
    } else {
      return "carousel-image";
    }
  };

  return (
    <div className="carousel">
      <div className="footer-links" />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${index + 1}`}
          className={getImageClass(index)}
        />
      ))}
      <div className="footer-links" />
    </div>
  );
};

export default Carousel;
