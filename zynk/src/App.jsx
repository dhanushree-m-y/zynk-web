import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/about.jsx";  // Correct import
import FeaturedEvents from "./Pages/Home/FeaturedEvents.jsx";
import TechEventCategories from "./Pages/Home/TechEventCategories.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";

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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
