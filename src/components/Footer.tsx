import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-[100px] pb-[30px]">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8 mb-[80px]">
          {/* Logo & Description */}
          <div className="pr-[px]">
            <img src="/src/assets/logo-bg.png" className="pb-6" alt="" />
            <p className="text-base mb-4">
              Loo faff about cockup Harry baking cakes hunky dory mush happy
              days on your bike mate.
            </p>
            <div>
              <p className="flex items-center text-blue-600 pt-4 pb-2 gap-2 text-base mb-2">
                <FaPhone className="text-base text-blue-500 cursor-pointer" />
                +44 208 133 2072
              </p>
              <p className="flex items-center text-base gap-2 text-blue-600 ">
                <MdMailOutline className="text-lg text-blue-500" />
                info@haroldinternationalcollege.co.uk
              </p>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-black">
              POPULAR COURSES
            </h3>
            <ul className="space-y-2 text-base">
              <li>Algebra & Calculus</li>
              <li>Business Strategy</li>
              <li>Computer Security & Network</li>
              <li>Data Analysis</li>
              <li>English Learning</li>
              <li>Music & Art</li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg  font-medium mb-4 text-black">
              COURSE CATEGORIES
            </h3>
            <ul className="space-y-2 text-base">
              <li>Arts & Humanities</li>
              <li>Business</li>
              <li>Computer Science</li>
              <li>Data Science</li>
              <li>Language Learning</li>
              <li>Math & Logic</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg  font-medium mb-4 text-black">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-base">
              <li>Live Class</li>
              <li>Tuition Fees</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Career</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-6 text-center sm:flex sm:justify-between sm:items-center space-y-4 sm:space-y-0 px-4">
          <p className="text-base">
            © Copyright 2024. Design by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              BitBuilder Productions
            </a>
            . All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="group relative text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-red-600 transition duration-300"
            >
              <FaYoutube size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedinIn size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-blue-500 transition duration-300"
            >
              <FaSkype size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative text-gray-600 hover:text-red-500 transition duration-300"
            >
              <FaPinterest size={24} />
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
