/* eslint-disable no-unused-vars */
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-gradient-to-b from-slate-100 to-slate-300">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          Trusted by Farmers Nationwide
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from dairy farmers and livestock owners who've transformed their operations with our premium feeds
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial Cards */}
        {[
          {
            quote: "Shiva Cattle Feeds' Pellet feed has transformed the health of our livestock. The cows are more energetic and produce better milk. Truly a dependable product!",
            author: "Prakash Deshmukh",
            rating: 5,
            location: "Ahmednagar, Maharashtra"
          },
          {
            quote: "Shiva Cattle Feeds provides excellent products at affordable prices. The quality of their pellet feed has improved my dairy business.",
            author: "Ramesh Patil",
            rating: 5,
            location: "Kolhapur, Maharashtra"
          },
          {
            quote: "The maize powder feed from Shiva Cattle Feeds is of top-notch quality. My cows love it, and it's made a noticeable difference in their health.",
            author: "Sunita Jadhav",
            rating: 4,
            location: "Pune, Maharashtra"
          },
          {
            quote: "Shiva Cattle Feeds delivers great results! Both the pellet and maize powder feed are perfect for my livestock's needs.",
            author: "Rahul P.",
            rating: 5,
            location: "Nashik, Maharashtra"
          },
          {
            quote: "I've been using Shiva Cattle Feeds' products for months. The quality and service are outstanding, and my cattle are thriving.",
            author: "Rekha More",
            rating: 5,
            location: "Satara, Maharashtra"
          },
          {
            quote: "Shiva Cattle Feeds is the best choice for livestock feed. Their pellet and maize powder have significantly improved my farm's productivity.",
            author: "Vijay Shinde",
            rating: 5,
            location: "Sangli, Maharashtra"
          }
        ].map((testimonial, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-t-xl"></div>
            <FaQuoteLeft className="text-3xl text-gray-200 mb-4" />
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              {testimonial.quote}
            </p>
            <div className="mt-auto">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-sm ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <div className="font-semibold text-gray-800">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
          <div className="text-sm text-gray-600">Happy Farmers</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-emerald-600 mb-1">95%</div>
          <div className="text-sm text-gray-600">Repeat Customers</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-amber-600 mb-1">4.9/5</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
          <div className="text-sm text-gray-600">Years Serving Farmers</div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;