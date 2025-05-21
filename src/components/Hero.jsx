/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => (
  <section
    id="hero"
    className="relative flex items-center justify-center min-h-screen overflow-hidden pt-24"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/50"></div>
      <img
        src="/assets/herobg.jpg"
        alt="Healthy Cattle"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Hero Content */}
    <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-7xl text-center">
      {/* Main Title with Animation */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
          Premium Quality
        </span>
        <br />
        <span className="text-white">Cattle Feeds</span>
      </h1>

      {/* Tagline with Animation */}
      <div className="inline-block px-6 py-2 bg-red-600/90 text-white text-lg font-semibold rounded-full mb-8 shadow-lg animate-pulse">
        Only for Cows, Buffaloes, and Calves
      </div>

      {/* Description Text */}
      <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
        Scientifically formulated feeds to enhance livestock health, milk production, and overall performance. Trusted by farmers across Maharashtra.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a
          href="#products"
          className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:shadow-xl"
        >
          Explore Products
          <FaArrowDown className="ml-2 animate-bounce" />
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white hover:bg-white/30 transition-all duration-300 hover:shadow-lg"
        >
          Contact Us
        </a>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-4xl mx-auto border border-white/20">
        <div className="grid grid-cols-3 divide-x divide-white/20">
          <div className="px-4 py-2">
            <div className="text-3xl font-bold text-amber-400">20+</div>
            <div className="text-white/80 text-sm">Years Experience</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-3xl font-bold text-amber-400">500+</div>
            <div className="text-white/80 text-sm">Happy Farmers</div>
          </div>
          <div className="px-4 py-2">
            <div className="text-3xl font-bold text-amber-400">50+</div>
            <div className="text-white/80 text-sm">Quality Products</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>

    {/* Custom Animation Styles */}
    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateY(10px);
          opacity: 0;
        }
      }
      .animate-scroll {
        animation: scroll 2s infinite;
      }
    `}</style>
  </section>
);

export default Hero;