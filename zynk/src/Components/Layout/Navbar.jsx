import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn, User, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/api/placeholder/32/32"
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'Events',
      path: '/events',
      dropdownItems: [
        { title: 'Organize', path: '/events/organize-events' },
        { title: 'Featured Events', path: '/events/featured' },
        { title: 'All Events', path: '/events/all' },
        { title: 'Conferences', path: '/events/conferences' },
        
        { title: 'Hackathons', path: '/events/hackathons' }
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    window.location.href = '/login';
  };

  const NavLink = ({ item }) => {
    const hasDropdown = item.dropdownItems?.length > 0;

    return (
      <div className="relative group">
        <a
          href={item.path}
          className="flex items-center px-4 py-2 text-secondary-50 hover:text-secondary-200 transition-colors font-medium"
          onMouseEnter={() => hasDropdown && setActiveDropdown(item.title)}
          onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
        >
          {item.title}
          {hasDropdown && (
            <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </a>

        {hasDropdown && activeDropdown === item.title && (
          <div
            className="absolute left-0 mt-1 w-48 rounded-xl bg-primary-800 shadow-lg py-2 z-50 border border-primary-600"
            onMouseEnter={() => setActiveDropdown(item.title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.dropdownItems.map((dropdownItem, index) => (
              <a
                key={index}
                href={dropdownItem.path}
                className="block px-4 py-3 text-secondary-100 hover:bg-primary-700 hover:text-secondary-50 transition-all"
              >
                {dropdownItem.title}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const ProfileButton = () => (
    <div className="relative">
      <button
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-700 transition-colors"
        onMouseEnter={() => setActiveDropdown('profile')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="w-8 h-8 rounded-full border-2 border-primary-600"
        />
        <span className="text-secondary-50 font-medium hidden sm:inline">{userProfile.name}</span>
        <ChevronDown className="w-4 h-4 text-secondary-50" />
      </button>

      {activeDropdown === 'profile' && (
        <div
          className="absolute right-0 mt-2 w-64 bg-primary-800 rounded-xl shadow-lg py-2 border border-primary-600"
          onMouseEnter={() => setActiveDropdown('profile')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="px-4 py-3 border-b border-primary-700">
            <p className="text-sm font-medium text-secondary-50">{userProfile.name}</p>
            <p className="text-xs text-secondary-200 mt-1">{userProfile.email}</p>
          </div>
          <div className="py-2">
            <a
              href="/profile"
              className="flex items-center px-4 py-2 text-secondary-100 hover:bg-primary-700 hover:text-secondary-50"
            >
              <User className="w-4 h-4 mr-3" />
              Profile
            </a>
            <a
              href="/settings"
              className="flex items-center px-4 py-2 text-secondary-100 hover:bg-primary-700 hover:text-secondary-50"
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </a>
            <div className="border-t border-primary-700 my-2" />
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-secondary-100 hover:bg-primary-700 hover:text-secondary-50"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-800 shadow-lg' : 'bg-primary-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tertiary-500 to-tertiary-700" />
              <span className="ml-2 text-xl font-bold text-secondary-50">Zynk</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-1">
            {menuItems.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ProfileButton />
            <div className="h-8 w-px bg-primary-600" />
            <a
              href="/login"
              className="px-4 py-2 text-secondary-50 hover:text-secondary-200 transition-colors flex items-center font-medium"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg transition-colors font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-secondary-50 hover:text-secondary-200 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <a
                  href={item.path}
                  className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
                {item.dropdownItems && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.path}
                        className="block px-3 py-2 text-secondary-200 hover:text-secondary-50 hover:bg-primary-700 rounded-lg transition-colors text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="border-t border-primary-700 my-2" />
            
            <a href="/profile" className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium">
              <User className="w-4 h-4 inline mr-2" />
              Profile
            </a>
            <a href="/settings" className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium">
              <Settings className="w-4 h-4 inline mr-2" />
              Settings
            </a>
            
            <div className="border-t border-primary-700 my-2" />
            
            <a href="/login" className="block px-3 py-2 text-secondary-50 hover:text-secondary-200 font-medium">
              <LogIn className="w-4 h-4 inline mr-2" />
              Login
            </a>
            <a href="/signup" className="block px-3 py-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg text-center font-medium">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;