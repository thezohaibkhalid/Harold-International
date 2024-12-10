import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const NavNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-[90%] mx-auto px-2 sm:px-6 lg:px-6">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Contact Info */}
          <div className="flex-shrink-0 flex">
            <div className="flex text-center items-center gap-3 border-r-2 pr-8 border-gray-200 h-8">
              <FaPhone className="text-lg text-blue-500 cursor-pointer" />
              <a
                href="tel:+442081332072"
                className="text-sm font-normal text-[#0b1c39] hover:text-blue-500"
              >
                +44 20 8133 2072
              </a>
            </div>
            <div className="flex text-center items-center gap-3 pl-8 cursor-pointer">
              <MdMailOutline className="text-lg text-blue-500" />
              <span className="text-sm font-normal text-[#0b1c39] hover:text-blue-500">
                info@haroldinternationalcollege.co.uk
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline">
              <div className="font-normal text-base pr-4 border-gray-200">
                <span>Become a Teacher</span>
              </div>
              <div className="font-normal text-base border-l-2 pl-4">
                <span>My Profile</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white w-full py-4">
          <div className="flex flex-col items-center gap-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhone className="text-lg text-blue-500" />
              <a
                href="tel:+442081332072"
                className="text-sm font-normal text-[#0b1c39] hover:text-blue-500"
              >
                +44 20 8133 2072
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <MdMailOutline className="text-lg text-blue-500" />
              <span className="text-sm font-normal text-[#0b1c39] hover:text-blue-500">
                info@haroldinternationalcollege.co.uk
              </span>
            </div>
            {/* Links */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-normal text-base hover:text-blue-500 cursor-pointer">
                Become a Teacher
              </span>
              <span className="font-normal text-base hover:text-blue-500 cursor-pointer">
                My Profile
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavNavbar;
