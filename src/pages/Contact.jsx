/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import img1 from "../assets/product2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "6c25bc76-6336-4b33-a6bf-0409542f8b06", // Replace with your Web3Forms access key
        ...formData,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      className="py-10 bg-slate-300 text-darkGray"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
          Get in Touch
        </h2>

        {/* Contact Form Section */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white text-primary p-6 rounded-lg shadow-lg border border-gray-300"
          >
            {success && (
              <p className="text-green-500 mb-4">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 mb-4">
                Something went wrong. Please try again.
              </p>
            )}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows="5"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg shadow-lg hover:bg-secondary transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>

          {/* Company Address Section */}
          <div className="bg-slate-200 text-darkGray p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-2xl text-primary font-bold mb-4">Our Address</h3>
            <p className="mb-2 leading-snug text-darkGray">
              Shiva Animal Feed Manufacturing Companies
            </p>
            <p className="mb-2 leading-snug">
              A/P-Nhavare, Tambe Wasti, Tal. Shirur, Dist. Pune
            </p>
            <p className="mb-2 leading-snug">Pin Code: 412211</p>
            <p className="mb-2 text-secondary leading-snug">
              Phone: 7744961258 / 9975104978
            </p>
            <p className="text-secondary leading-snug">
              Email: Shivacattlefeeds@gmail.com
            </p>
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
};

export default Contact;
