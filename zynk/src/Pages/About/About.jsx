import React from 'react';
import Hero from './hero';
import AboutHero from "./AboutHero";

function Home() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Newsletter/>
      {/* Add other home page sections here */}
    </div>
  );
}

export default About;