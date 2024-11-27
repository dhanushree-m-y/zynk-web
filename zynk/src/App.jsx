import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import FeaturedEvents from "./Pages/Home/FeaturedEvents.jsx";
import TechEventCategories from "./Pages/Home/TechEventCategories.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import About from "./Pages/About/about.jsx";
import Login from "./Pages/Auth/Login.jsx";
import SignupPage from "./Pages/Auth/SignupPage.jsx";
import OrganizeEvent from "./Pages/Events/OrganizeEvent.jsx";
import Hackathon from "./Pages/Events/Hackathon.jsx"
import Profile from "./Pages/Profile/Profile.jsx";
import Conference from "./Pages/Events/Conference.jsx";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/featured" element={<FeaturedEvents />} />
          <Route path="/events" element={<TechEventCategories />} />
          <Route path="/events/:category" element={<TechEventCategories />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} /> {/* Login route added */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup route added */}
          <Route path="/organize-event" element={<OrganizeEvent />} />
          <Route path="/hackathons" element={<Hackathon />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/conference" element={<Conference />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
