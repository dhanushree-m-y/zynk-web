import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const eventCategories = [
    { name: 'Conferences', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Hackathons', href: '#' },
    { name: 'Networking', href: '#' },
    { name: 'Tech Talks', href: '#' },
    { name: 'Webinars', href: '#' }
  ];

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'Guidelines', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-primary-900 text-secondary-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tertiary-500 to-tertiary-700" />
              <span className="ml-3 text-2xl font-bold text-secondary-50">Zynk</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Discover amazing events, connect with like-minded professionals, and grow your network with Zynk - your ultimate event discovery platform.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tertiary-400" />
                <a href="mailto:contact@zynk.com" className="text-secondary-200 hover:text-secondary-50 transition-colors">
                  contact@zynk.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tertiary-400" />
                <span className="text-secondary-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-tertiary-400" />
                <span className="text-secondary-200">123 Event Street, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-50 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-secondary-50 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-50 mb-6">Event Categories</h3>
            <ul className="space-y-4">
              {eventCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-secondary-300 hover:text-secondary-50 transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-50 mb-6">Stay Updated</h3>
            <p className="text-secondary-300 text-sm mb-4">
              Subscribe to our newsletter for the latest events and updates.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-primary-800 rounded-lg text-secondary-100 placeholder-secondary-400 border border-primary-700 focus:outline-none focus:border-tertiary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-lg p-2 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-secondary-50 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 bg-primary-800 hover:bg-primary-700 rounded-lg text-secondary-300 hover:text-secondary-50 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              <span>© 2024 Zynk. All rights reserved. Made with </span>
              <Heart className="w-4 h-4 inline-block mx-1 text-tertiary-500" />
              <span>by Zynk Team</span>
            </div>
            <div className="flex space-x-6">
              {resources.slice(3).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-secondary-400 hover:text-secondary-200 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;