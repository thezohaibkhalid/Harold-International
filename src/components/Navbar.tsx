import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="lg:w-[95%] md:w-[98%] mx-auto flex items-center justify-between h-[90px] px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="lg:h-[40px] md:h-[35px] h-[32px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-sm space-x-6 items-center z-10">
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
            Diploma Recognition
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Scholarships
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Departments
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>

        {/* Button and Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-2 text-sm lg:text-base bg-blue-500 text-white font-medium rounded-full hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 transform transition duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Online Courses
          </a>
          <button
            className="lg:hidden text-gray-800 hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose  className="text-2xl font-thin   text-gray-600"/> : <RxHamburgerMenu className="text-2xl font-bold  text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`lg:hidden bg-white shadow-md fixed top-[90px] left-0 w-full transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[350px]"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="space-y-4 py-4 px-6">
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
            Diploma Recognition
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Courses
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Scholarships
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Departments
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
