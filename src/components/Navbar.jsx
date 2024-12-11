/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkGray text-white shadow-lg z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo/Brand */}
        <h1 className="text-2xl font-bold">Shiva Cattle Feeds</h1>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8">
          <li>
            <a href="#hero" className="hover:text-secondary font-medium transition duration-200">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-secondary font-medium transition duration-200">About</a>
          </li>
          <li>
            <a href="#products" className="hover:text-secondary font-medium transition duration-200">Products</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-secondary font-medium transition duration-200">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary font-medium transition duration-200">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Dropdown when Hamburger clicked */}
      {isOpen && (
        <div className="md:hidden bg-darkGray text-white w-full py-4 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <a href="#hero" className="hover:text-secondary">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary">About</a>
            </li>
            <li>
              <a href="#products" className="hover:text-secondary">Products</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-secondary">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
