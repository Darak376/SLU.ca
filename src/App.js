import React from "react";
import Homepage from "./Homepage";
import "./App.css";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Contact1 from "./components/Contact1";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Services />
      <Carousel />
      <Contact />
      <Contact1 />
      <Footer />
    </div>
  );
}

export default App;
