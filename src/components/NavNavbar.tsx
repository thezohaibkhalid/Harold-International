import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const NavNavbar: React.FC = () => {
  return (
    <nav className="bg-[#f6f7fa] shadow-md">
      <div className="w-[95%] mx-auto px-2 sm:px-6 md:px-6 lg:px-6">
        <div className="relative flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row lg:justify-between h-auto py-4">
          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg text-blue-500 cursor-pointer" />
              <a
                href="tel:+464145684325"
                className="text-sm font-normal text-[#0b1c39] hover:text-blue-500"
              >
                +464 145 684 325
              </a>
            </div>
            <div className="hidden lg:block h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <MdMailOutline className="text-lg text-blue-500" />
              <a
                href="mailto:admin@example.com"
                className="text-sm font-normal text-[#0b1c39] hover:text-blue-500"
              >
                 info@haroldinternationalcollege.co.uk
              </a>
            </div>
          </div>
          <div className="block lg:hidden md:hidden w-[98%] mt-6 h-px bg-gray-300"></div>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-4 pt-4 lg:flex-row lg:pt-0 lg:gap-8">
            <div className="font-normal text-sm flex text-center items-center gap-2">
            <FaLocationDot className="text-lg text-blue-500"/>
              <span>71-75 Shelton Street, Covent Garden, London WC2H 9JQ</span>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavNavbar;
