/* eslint-disable no-unused-vars */
import React from "react";
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product4.jpg"
import product3 from "../assets/product3.jpeg"

const Products = () => (
  <section id="products" className="py-10 bg-slate-300 text-primary">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
      {/* Section Title */}
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-8 leading-tight">
        Our Products
      </h2>
      <p className="text-center text-red-800 text-xl font-semibold p-4 rounded-lg mb-4">
      Only for Cows, Buffaloes, and Calves
    </p>
      {/* Grid Layout for Products */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div className="p-4 bg-white text-darkGray rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <img
            src= {product1}
            alt="Product 1"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-bold mb-2">Pellets</h3>
          <p className="text-sm leading-snug">
            Premium animal feed for livestock growth and strength.
          </p>
        </div>
        {/* Product 2 */}
        <div className="p-4 bg-white text-darkGray rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <img
            src= {product2}
            alt="Product 2"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-bold mb-2">Maize Powder</h3>
          <p className="text-sm leading-snug">
            Balanced nutrition for improved reproduction rates.
          </p>
        </div>
        {/* Product 3 */}
        <div className="p-4 bg-white text-darkGray rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <img
            src= {product3}
            alt="Product 3"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-bold mb-2">Pellets</h3>
          <p className="text-sm leading-snug">
            Essential feed for overall health and vitality.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
