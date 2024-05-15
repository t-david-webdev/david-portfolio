import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col justify-end items-end">
              <img src="/path/to/logo.png" alt="Logo" className="w-16 h-auto mr-4" />
              <p className="text-sm text-gray-400">Your tagline goes here</p>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-1">
              <div>
                <h4 className="text-lg font-semibold mb-2">Navigation</h4>
                <ul className="text-sm">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                </ul>
              </div>
  
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex justify-center lg:justify-end mt-6">
          <a href="#facebook" className="text-gray-400 hover:text-white mr-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Facebook icon */}
            </svg>
          </a>
          <a href="#twitter" className="text-gray-400 hover:text-white mr-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Twitter icon */}
            </svg>
          </a>
          <a href="#linkedin" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn icon */}
            </svg>
          </a>
        </div>
        {/* Legal Links */}
        <div className="text-sm text-center mt-6">
          <Link to="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
        {/* Copyright */}
        <p className="text-center text-gray-600 mt-6 text-[12px]">&copy; {currentYear} David WebDev. Published under GNU Public License.</p>
      </div>
    </footer>
  );
}

export default Footer;
