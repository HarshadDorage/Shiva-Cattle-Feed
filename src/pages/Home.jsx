/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";

const Home = () => (
  <div>
    <Hero />
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to Shiva Cattel Feeds</h2>
        <p className="text-center">
          We provide premium-quality animal feed products that ensure the health and well-being of your livestock.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
