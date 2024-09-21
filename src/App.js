import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Contact1 from "./components/Contact1";
import Footer from "./components/Footer";
import Careers from "./forms/Careers";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main scrollable page */}
        <Route path="/" element={<MainPage />} />

        {/* Separate Careers page */}
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
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
