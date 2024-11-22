import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Events', 
      path: '/events',
      dropdownItems: [
        { title: 'Featured Events', path: '/events/featured' },
        { title: 'All Events', path: '/events/all' },
        { title: 'Conferences', path: '/events/conferences' },
        { title: 'Workshops', path: '/events/workshops' },
        { title: 'Hackathons', path: '/events/hackathons' }
        
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const NavLink = ({ item }) => {
    const hasDropdown = item.dropdownItems?.length > 0;
    const isActive = location.pathname === item.path;

    return (
      <div className="relative group">
        <Link
          to={item.path}
          className={`flex items-center px-4 py-2 text-secondary-50 hover:text-secondary-200 transition-colors font-medium ${
            isActive ? 'text-tertiary-300' : ''
          }`}
          onMouseEnter={() => hasDropdown && setActiveDropdown(item.title)}
          onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
        >
          {item.title}
          {hasDropdown && (
            <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </Link>

        {hasDropdown && activeDropdown === item.title && (
          <div
            className="absolute left-0 mt-1 w-48 rounded-xl bg-primary-800 shadow-lg py-2 z-50 border border-primary-600"
            onMouseEnter={() => setActiveDropdown(item.title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.dropdownItems.map((dropdownItem, index) => (
              <Link
                key={index}
                to={dropdownItem.path}
                className="block px-4 py-3 text-secondary-100 hover:bg-primary-700 hover:text-secondary-50 transition-all"
              >
                {dropdownItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-800 shadow-lg' 
          : 'bg-primary-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tertiary-500 to-tertiary-700" />
              <span className="ml-2 text-xl font-bold text-secondary-50">Zynk</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-1">
            {menuItems.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-secondary-50 hover:text-secondary-200 transition-colors flex items-center font-medium"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-secondary-50 hover:text-secondary-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-800 border-t border-primary-700">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.dropdownItems && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.path}
                        className="block px-3 py-2 text-secondary-200 hover:text-secondary-50 hover:bg-primary-700 rounded-lg transition-colors text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/login"
                className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;