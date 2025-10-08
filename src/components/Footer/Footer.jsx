import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div 
          >
            <Link to="/" className="text-xl flex items-center gap-1">
            <img src={logo} alt="HERO.IO" className="w-6 h-6 md:w-10 md:h-10" />
            <span className="font-bold text-2xl md:text-3xl logo-text">HERO.IO</span>
          </Link>
          </div>
          <p className="text-gray-500 mt-2">
            Discover, install, and manage all your favorite apps in one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-500">
            <li><Link to="./" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="./apps" className="hover:text-blue-500">Apps</Link></li>
            <li><Link to="./installation" className="hover:text-blue-500">Installation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-sky-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-blue-700 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HERO.IO — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
