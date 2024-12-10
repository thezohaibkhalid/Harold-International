import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const NavNavbar: React.FC = () => {
  return (
    <nav className="bg-[#f6f7fa] shadow-md">
      <div className="w-[90%] mx-auto px-2 sm:px-6 lg:px-6">
        <div className="relative flex items-center justify-between h-[60px]">
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
        </div>
      </div>
    </nav>
  );
};

export default NavNavbar;
