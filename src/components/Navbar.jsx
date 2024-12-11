/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 p-2 w-full bg-darkGray text-white shadow-lg z-50">
    <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shiva Cattle Feeds</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-secondary">Home</a></li>
        <li><a href="#about" className="hover:text-secondary">About</a></li>
        <li><a href="#products" className="hover:text-secondary">Products</a></li>
        <li><a href="#testimonials" className="hover:text-secondary">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
