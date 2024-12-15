import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Feature from "../assets/Trusted.png";
const ExpertInstitution = () => {
  return (
    <section className="flex max-w-[90%] mx-auto flex-col lg:flex-row items-center justify-center lg:gap-x-60 gap-8 lg:gap-16 px-6 md:px-12 lg:px-6 py-12 lg:py-24 bg-white">
      {/* Left Side Image Section */}
      <div className="relative flex-shrink-0">
        <img
          src={Feature} // Replace with your actual image path
          alt="Expert Learning"
          className="rounded-lg object-cover shadow-md w-[300px] sm:w-[350px] lg:w-[500px] h-auto"
        />
        {/* Floating Badge */}
        <div className="absolute flex flex-col  top-[-10px] left-[-20px] bg-blue-600 text-white rounded-full px-8 py-10 shadow-lg     justify-center space-x-1">
          <span className="text-base font-medium uppercase">Trusted By</span>
          
          <span className="font-bold text-4xl">45k+</span>
        </div>
      </div>

      {/* Right Side Content Section */}
      <div className="flex flex-col items-start text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-extrabold text-gray-900 leading-tight mb-4">
          We are Experts Learning <br /> Institution
        </h2>
        <p className="text-blue-500 text-2xl font-medium mb-2">
          20 Years of Experience
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
          Do one absolutely bladdered say bugger all mate only a quid that chip
          shop amongst, cuppa excuse my French lemon squeezy bender zonked my
          lady gosh cup of tea.
        </p>

        {/* Call Us Section */}
        <div className="flex items-center space-x-3 mb-6">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <span className="text-gray-800 font-semibold md:text-sm lg:text-lg">
            Call Us:{" "}
            <a href="tel:+45696856275" className="text-blue-600">
              +456 968 562 75
            </a>
          </span>
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white font-semibold rounded-full py-3 px-6 hover:bg-white hover:text-blue-600 border-2 border-blue-500 transition duration-300 text-base ease-in-out focus:outline-none">
          View Courses
        </button>
      </div>
    </section>
  );
};

export default ExpertInstitution;
