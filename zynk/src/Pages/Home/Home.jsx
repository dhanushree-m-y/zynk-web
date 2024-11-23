// src/Pages/Home/Home.jsx
import React from 'react';
import Hero from "./Hero.jsx";
import FeaturedEvents from "./FeaturedEvents.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedEvents />
    </div>
  );
};

export default Home;