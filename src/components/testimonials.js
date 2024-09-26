import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Import star icon from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"; // Import custom CSS

const testimonials = [
  {
    name: "John Doe",
    text: "SLU provided exceptional service and was quick to deliver!",
  },
  {
    name: "Marcus Lim",
    text: "Highly recommend SLU for forklift and lumping services. They are professional and efficient.",
  },
  {
    name: "Robert Brown",
    text: "A seamless experience from start to finish. Will definitely use them again for our logistics!",
  },
  {
    name: "Alice Johnson",
    text: "Great service with a smile! SLU is my go-to for lumping and forklift services.",
  },
  {
    name: "Mei Patel",
    text: "Fast, reliable, and trustworthy. SLU exceeded my expectations.",
  },
  {
    name: "Patricia Wilson",
    text: "Very professional team. SLU helped us streamline our logistics.",
  },
  {
    name: "Michael Clark",
    text: "SLU made our operation smooth and hassle-free. Highly recommend their lumper and forklift services!",
  },
  {
    name: "Ryan Tan",
    text: "Amazing customer service and speedy operations from SLU!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Constant movement
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // For large screens (1200px and below)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // For medium screens (992px and below)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For tablets and smaller screens (768px and below)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <h2 className="title">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-author">- {testimonial.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#c90000" />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
