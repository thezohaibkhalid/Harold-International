import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-700 text-white">
      <div className="text-2xl font-bold">BrandName</div>
      <div className={`md:flex items-center space-x-6 ${menuOpen ? 'flex' : 'hidden'} md:block`}>
        <a href="#home" className="hover:text-gray-400 transition">Home</a>
        <a href="#services" className="hover:text-gray-400 transition">Services</a>
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>
      <div
        className={`md:hidden flex flex-col justify-center items-center space-y-2 cursor-pointer ${menuOpen ? 'transform rotate-45' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`w-6 h-1 bg-white transform transition-all ${menuOpen ? 'rotate-45' : ''} mb-1`}></div>
        <div className={`w-6 h-1 bg-white transform transition-all ${menuOpen ? 'opacity-0' : ''} mb-1`}></div>
        <div className={`w-6 h-1 bg-white transform transition-all ${menuOpen ? 'rotate-45' : ''}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
