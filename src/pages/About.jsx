/* eslint-disable no-unused-vars */
import React from "react";

const About = () => (
  <section id="about" className="py-16 bg-gradient-to-b from-slate-100 to-slate-300">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center max-w-6xl">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          About Us
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Description */}
      <p className="text-lg text-gray-800 md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto">
        Shiva Cattle Feeds Manufacturing Company has been dedicated to providing high-quality feed products for over two decades. 
        Our mission is to enhance livestock well-being through scientifically formulated premium nutrition.
      </p>
      
      {/* Vision/Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-xl mb-3 text-gray-800">Quality Products</h4>
          <p className="text-gray-600 leading-relaxed">
            Every product undergoes rigorous testing to meet international standards for optimal livestock health and performance.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
          <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h4 className="font-bold text-xl mb-3 text-gray-800">Sustainable Practices</h4>
          <p className="text-gray-600 leading-relaxed">
            Eco-friendly manufacturing with a focus on reducing carbon footprint while maintaining product excellence.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
          <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-xl mb-3 text-gray-800">Trusted Partners</h4>
          <p className="text-gray-600 leading-relaxed">
            Collaborating with certified suppliers and farmers to maintain quality from source to feed.
          </p>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white">
          <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white">
          <div className="text-3xl font-bold text-emerald-600 mb-1">500+</div>
          <div className="text-sm text-gray-600">Happy Farmers</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white">
          <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
          <div className="text-sm text-gray-600">Products</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white">
          <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;