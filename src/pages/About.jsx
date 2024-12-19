/* eslint-disable no-unused-vars */
import React from "react";

const About = () => (
  <section id="about"   className="py-10 bg-slate-300 text-darkGray">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center max-w-6xl">
      {/* Section Title */}
      <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 leading-tight">
        About Us
      </h2>
      {/* Description */}
      <p className="text-lg text-gray-700 md:text-xl mb-6 leading-relaxed">
        Shiva Cattel Feeds Manufacturing Companies has been dedicated to providing high-quality feed products for over two decades. 
        Our mission is to enhance the well-being of cattel through premium nutrition.
      </p>
      {/* Vision/Key Highlights */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <div className="bg-secondary text-darkGray p-4 rounded-lg shadow-md w-full md:w-[45%] lg:w-[30%]">
          <h4 className="font-semibold mb-2">Quality Products</h4>
          <p className="text-sm leading-snug">We ensure that every product meets industry standards for optimal health and performance.</p>
        </div>
        <div className="bg-secondary text-darkGray p-4 rounded-lg shadow-md w-full md:w-[45%] lg:w-[30%]">
          <h4 className="font-semibold mb-2">Sustainable Practices</h4>
          <p className="text-sm leading-snug">Our manufacturing methods prioritize environmental safety and sustainability.</p>
        </div>
        <div className="bg-secondary text-darkGray p-4 rounded-lg shadow-md w-full md:w-[45%] lg:w-[30%]">
          <h4 className="font-semibold mb-2">Trusted Partners</h4>
          <p className="text-sm leading-snug">We work with trusted supply chains to ensure premium quality at all times.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
