/* eslint-disable no-unused-vars */
import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-10 bg-slate-300 text-primary ">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl mb-8">
      {/* Section Title */}
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        What Our Clients Say
      </h2>
      {/* Testimonials Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          Shiva Cattle Feeds' Pellet feed has transformed the health of our livestock. The cows are more energetic and produce better milk. Truly a dependable product!
          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Prakash Deshmukh.</p>
        </div>
        {/* Testimonial 2 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          Shiva Cattle Feeds provides excellent products at affordable prices. The quality of their pellet feed has improved my dairy business.          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Ramesh Patil.</p>
        </div>
        {/* Testimonial 3 */}
        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          The maize powder feed from Shiva Cattle Feeds is of top-notch quality. My cows love it, and it’s made a noticeable difference in their health.          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Sunita Jadhav
          </p>
        </div>

        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          Shiva Cattle Feeds delivers great results! Both the pellet and maize powder feed are perfect for my livestock's needs.          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Rahul P.</p>
        </div>

        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          I’ve been using Shiva Cattle Feeds' products for months. The quality and service are outstanding, and my cattle are thriving          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Rekha More.</p>
        </div>

        <div className="p-6 bg-white text-darkGray rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <p className="italic mb-4 text-gray-600 leading-snug">
          Shiva Cattle Feeds is the best choice for livestock feed. Their pellet and maize powder have significantly improved my farm’s productivity.
          </p>
          <p className="mt-4 text-right text-secondary font-semibold text-sm">- Vijay Shinde.</p>
        </div>

      </div>
    </div>
  </section>
);

export default Testimonials;
