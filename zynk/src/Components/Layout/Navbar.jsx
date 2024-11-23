// Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';  // Import Link or NavLink instead of Router

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4">
              {/* Your logo or brand name */}
              <span className="font-semibold text-gray-500 text-lg">Your Brand</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-class" : "inactive-class"
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-class" : "inactive-class"
                }
              >
                About
              </NavLink>
              
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "active-class" : "inactive-class"
                }
              >
                Events
              </NavLink>
              
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-class" : "inactive-class"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;