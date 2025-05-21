import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Shiva Cattle Feeds
              </span>
            </h3>
            <p className="mb-4 text-green-100">
              Providing premium quality cattle feed solutions for over 20 years. 
              Committed to livestock health and farmer success.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/917744961258" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-green-100 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-100 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-green-100 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-green-100 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-400 flex-shrink-0" />
                <span className="text-green-100">
                  A/P-Nhavare, Tambe Wasti,<br />
                  Tal. Shirur, Dist. Pune - 412211
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-400" />
                <a href="tel:7744961258" className="text-green-100 hover:text-amber-400 transition-colors">
                  7744961258 / 9975104978
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-400" />
                <a href="mailto:Shivacattlefeeds@gmail.com" className="text-green-100 hover:text-amber-400 transition-colors">
                  Shivacattlefeeds@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 mb-4 md:mb-0">
            &copy; {currentYear} Shiva Cattle Feeds. All rights reserved.
          </p>
          <div className="text-green-200 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;