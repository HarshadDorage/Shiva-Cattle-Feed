import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg text-gray-800 py-2" : "bg-transparent text-white py-4"}`}>   
     <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <a 
            href="#hero" 
            className={`text-2xl font-bold ${scrolled ? "text-blue-600" : "text-white"}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Shiva Cattle Feeds
            </span>
          </a>

          {/* Desktop Menu and Contact */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#hero" 
                  className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Testimonials
                </a>
              </li>
            </ul>
            
            <a 
              href="#contact" 
              className={`ml-6 px-6 py-2 rounded-full font-medium transition-all ${scrolled ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg" : "bg-white text-amber-600 hover:bg-amber-50"}`}
            >
              Contact Us
            </a>
            
            <a 
              href="tel:7744961258" 
              className="flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span className="font-medium">7744961258</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block h-0.5 w-6 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all`}></span>
              <span className={`block h-0.5 w-6 ${isOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all`}></span>
              <span className={`block h-0.5 w-4 ${isOpen ? 'transform -rotate-45 -translate-y-1.5 w-6' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        <div className="container mx-auto px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#hero" 
                className="block py-2 text-gray-800 hover:text-amber-500 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 text-gray-800 hover:text-amber-500 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#products" 
                className="block py-2 text-gray-800 hover:text-amber-500 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block py-2 text-gray-800 hover:text-amber-500 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-gray-800 hover:text-amber-500 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <a 
                href="tel:7744961258" 
                className="flex items-center text-amber-600 hover:text-amber-700 transition-colors"
              >
                <FaPhone className="mr-2" />
                <span className="font-medium">Call: 7744961258</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;