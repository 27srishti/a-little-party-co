import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
  
      <Services />
      <WhyUs />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
