/* eslint-disable no-unused-vars */
import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product4.jpg";
import product3 from "../assets/product3.jpeg";

const Products = () => (
  <section id="products" className="py-16 bg-gradient-to-b from-slate-100 to-slate-300">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          Our Premium Products
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        <p className="inline-block px-6 py-2 bg-red-100 text-red-800 text-lg font-semibold rounded-full shadow-sm">
          Specially Formulated for Cows, Buffaloes, and Calves
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="overflow-hidden h-60">
            <img
              src={product1}
              alt="Cattle Feed Pellets"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Best Seller
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Premium Pellets</h3>
            <p className="text-gray-600 mb-4">
              High-density nutrition pellets for optimal livestock growth and strength. Formulated with essential vitamins and minerals.
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
              View Details
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="overflow-hidden h-60">
            <img
              src={product2}
              alt="Maize Powder"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            New Formula
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Maize Power Mix</h3>
            <p className="text-gray-600 mb-4">
              Balanced nutrition powder to enhance reproduction rates and milk production. Fortified with proteins and carbs.
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all">
              View Details
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="overflow-hidden h-60">
            <img
              src={product3}
              alt="Cattle Health Pellets"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Vitality Pellets</h3>
            <p className="text-gray-600 mb-4">
              Complete health formula for overall vitality and immunity. Contains probiotics and digestive enzymes.
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Need Custom Feed Solutions?</h3>
          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
            We offer specialized formulations tailored to your livestock's specific needs and local conditions.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all">
            Contact Our Nutrition Experts
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Products;