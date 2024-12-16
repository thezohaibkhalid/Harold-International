import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaSkype, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="text-blue-600 mr-2">
                {/* Logo (SVG or Image) */}
                <svg
                  className="h-6 w-6 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 1l7.997 4.884v8.232L10 19l-7.997-4.884V5.884z" />
                </svg>
              </span>
              Varsity
            </h2>
            <p className="text-sm mb-4">
              Loo faff about cockup Harry baking cakes hunky dory mush happy
              days on your bike mate.
            </p>
            <div>
              <p className="flex items-center text-blue-600 text-sm mb-2">
                📞 +464 145 684 325
              </p>
              <p className="flex items-center text-blue-600 text-sm">
                ✉️ education@example.com
              </p>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">POPULAR COURSES</h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="text-lg font-semibold mb-4">COURSE CATEGORIES</h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
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
        <div className="border-t mt-8 pt-4 text-center">
          <p className="text-sm">
            © Copyright 2024. Design by{' '}
            <a href="#" className="text-blue-600 hover:underline">
              MhrTheme
            </a>
            . All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition">
              <FaSkype size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
