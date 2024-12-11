/* eslint-disable no-unused-vars */
import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-10 bg-slate-300 text-primary">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
      {/* Section Title */}
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        What Our Clients Say
      </h2>
      {/* Testimonials Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
            Shiva Animal Feed has transformed the health of our livestock. Highly recommend!
          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- John D.</p>
        </div>
        {/* Testimonial 2 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
            Their products are of exceptional quality, and the customer service is amazing.
          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Maria K.</p>
        </div>
        {/* Testimonial 3 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
            Affordable, reliable, and simply the best animal feed company out there.
          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Rahul P.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
