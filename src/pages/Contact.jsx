/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/product2.jpg"

const Contact = () => (
  <section id="contact" className="py-10 bg-slate-300 text-darkGray">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
      {/* Section Title */}
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        Get in Touch
      </h2>

      {/* Contact Form Section */}
      <div className="grid gap-8  md:grid-cols-2">
        {/* Contact Form */}
        <form className="bg-white text-primary p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border text-darkGray border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border text-gray-700 border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border text-darkGray border-gray-300 rounded"
              rows="4"
              placeholder="Write your message here"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary hover:text-primary"
          >
            Submit
          </button>
        </form>

        {/* Company Address Section */}
        <div className="bg-slate-200 text-darkGray p-6 rounded-lg shadow-md">
          <h3 className="text-2xl text-primary font-bold mb-4">Our Address</h3>
          <p className="mb-2 leading-snug text-darkGray">
            Shiva Animal Feed Manufacturing Companies
          </p>
          <p className="mb-2 leading-snug">A/P-Nhavare,Tambe wasti,Tal.Shirur,Dist-Pune</p>
          <p className="mb-2 leading-snug">Pin Code: 412211</p>
          <p className="mb-2 text-secondary leading-snug">Phone: 7744961258/9975104978</p>
          <p className=" text-secondary leading-snug">Email: Shivacattlefeeds@gmail.com</p>
          <img
              src={img1}
              alt="Company Address"
              className="mt-4 w-full h-48 object-cover rounded-lg shadow-md"
            />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
