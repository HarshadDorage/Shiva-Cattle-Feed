/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => (
  <section
    id="hero"
    className="text-darkGray py-20 text-center min-h-screen"
    style={{
      backgroundImage: "url('src/assets/herobg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
      {/* Main Title */}
      <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Premium Quality Cattle Feeds
      </h1>
      
      {/* Description Text */}
      <p className="text-lg text-darkGray md:text-xl mb-6 leading-relaxed">
      Providing high-quality feed to keep your livestock healthy and strong for a better future.
      </p>
      
      {/* Call-to-Action Button */}
      <button className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"><a href="#products">
        Explore Products </a>
      </button>
    </div>
  </section>
);

export default Hero;
