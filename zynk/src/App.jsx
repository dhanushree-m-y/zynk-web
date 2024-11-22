import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout.jsx';
import Home from './Pages/Home/home.jsx';
import About from './Pages/About/AboutHero.jsx';
import FeaturedEvents from './Pages/Home/FeaturedEvents.jsx';
import TechEventCategories from './Pages/Home/TechEventCategories.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/featured" element={<FeaturedEvents />} />
          <Route path="/events" element={<TechEventCategories />} />
          <Route path="/events/:category" element={<TechEventCategories />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;