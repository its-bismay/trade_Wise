import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h1 className="text-xl text-white font-bold">TradeWise</h1>
            <p className="mt-2">Empowering global trade with intelligent solutions.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-2">Features</h2>
            <ul>
              <li><a href="#" className="hover:text-white">Compliance</a></li>
              <li><a href="#" className="hover:text-white">Financial Tools</a></li>
              <li><a href="#" className="hover:text-white">Risk Management</a></li>
              <li><a href="#" className="hover:text-white">AI Solutions</a></li>
            </ul>
          </div>


          <div>
            <h2 className="text-white font-semibold mb-2">Company</h2>
            <ul>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>


          <div>
            <h2 className="text-white font-semibold mb-2">Legal</h2>
            <ul>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>


        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2024 TradeWise. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;