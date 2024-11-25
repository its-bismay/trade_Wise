import React, { useState } from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-800">TradeWise</div>
            <div className="hidden md:flex space-x-6 ml-10">
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-800">
                Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-black text-gray-600 rounded-md hover:bg-gray-200">
              Login
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <button className="w-full px-4 py-2 border border-black text-gray-600 rounded-md hover:bg-gray-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
