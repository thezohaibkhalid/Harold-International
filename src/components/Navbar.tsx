import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  top-0 left-0 w-full z-50">
      <div className="max-w-[90%] mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8"
          />
          <span className="text-lg font-semibold text-gray-800">Varsity</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            All Courses
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Blog Classic
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Join Live Class
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button
            className="text-gray-800 hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-4 py-4 px-4">
            <a
              href="#"
              className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
            >
              All Courses
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
            >
              Blog Classic
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
            >
              Pages
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
