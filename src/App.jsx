/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "./components/Hero";
import About from "./pages/About";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
