import React from 'react';
import AboutHero from './AboutHero';
import Newsletter from './Newsletter';

function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Newsletter />
      {/* Add other about page sections here */}
    </div>
  );
}

export default About;
