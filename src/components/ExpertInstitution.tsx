import React from "react";
import Feature from "../assets/Trusted.png"; // Keep your existing image path or update it accordingly
import "./leading.css";

const ExpertInstitution : React.FC  = () => {
  return (
    <section className="flex w-[90%] flex-col lg:flex-row items-center justify-center lg:gap-x-[14%] gap-8 px-6 md:px-12 lg:px-6 py-12 lg:py-24 bg-white max-w-full mx-auto">
      {/* Left Side Image Section */}
      <div className="relative flex-shrink-0 w-full sm:w-[80%] lg:w-[500px] mx-auto">
        <img
          src={Feature} // Replace with your actual image path if needed
          alt="Harold International School"
          className="rounded-lg object-cover shadow-md w-full h-auto mx-auto"
        />
        
        {/* Floating Badge */}
        <div className="absolute top-[-10px] left-[-10px] sm:top-[-20px] sm:left-[-20px]">
          {/* Yellow Circle Accent */}
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 bg-yellow-400 rounded-full top-2 left-[90px] z-8"></div>

          {/* Blue Main Circle */}
          <div className="relative bg-blue-600 text-white rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="text-xs sm:text-sm font-medium uppercase">
              Trusted By
            </span>
            <span className="font-bold text-2xl sm:text-3xl">45k+</span>
          </div>
        </div>
      </div>

      {/* Right Side Content Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full sm:w-[90%] lg:w-[50%] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-relaxed leading-provider">
          Welcome to Harold International School of London
        </h2>
        <p className="text-blue-500 text-xl sm:text-2xl font-normal mb-2">
          30+ Years of Excellence in Education
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
        Harold International College of London delivers first-class learning in a warm, supportive, holistic and nurturing atmosphere. Our aim is to help each individual student succeed in their aspirations and achieve the best possible exam results. To this end, HICL has an ethos which places an emphasis on individual support and mentoring. Students come to Harold International College of London because they want to succeed, and we are proud in helping them to do so.
        </p>

        {/* Call Us Section */}
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
          <span className="text-gray-700 font-medium text-sm lg:text-2xl">
            Call Us:{" "}
            <a href="tel:+44567891234" className="text-blue-500 font-normal">
              +44 208 133 2072
            </a>
          </span>
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white font-semibold rounded-full py-3 px-6 hover:bg-white hover:text-blue-600 border-2 border-blue-500 transition duration-300 text-base ease-in-out focus:outline-none w-full sm:w-auto">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default ExpertInstitution;
