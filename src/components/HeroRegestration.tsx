import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaExternalLinkAlt } from 'react-icons/fa';

import course_1 from "../assets/course_1.svg";
import course_2 from "../assets/course_2.svg";
import course_3 from "../assets/course_3.svg";
import course_4 from "../assets/course_4.svg";
import course_5 from "../assets/course_5.svg";
import course_6 from "../assets/course_6.svg";
const features = [
  {
    id: 2,
    img: course_2,
    title: "Online Courses",
    text: "Access a variety of online courses anytime, anywhere.",
  },
  {
    id: 3,
    img: course_3,
    title: "Graduation",
    text: "Achieve your milestones and graduate successfully.",
  },
  {
    id: 5,
    img: course_5,
    title: "London School of Language",
    text: "Master English languages with professional courses.",
  },
  {
    id: 6,
    img: course_6,
    title: "London School of Tourism and Hospitality",
    text: "Explore career opportunities in tourism and hospitality.",
  },
];

const HeroRegistration: React.FC = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col md:flex-row lg:flex-row lg:gap-40 md:gap-10  py-16">
      {/* Left Section: Features */}

<div className="lg:flex-[65%] md:flex-[60%] grid grid-cols-1 sm:grid-cols-2 lg:gap-x-30 gap-x-8">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="relative space-y-6 items-start md:pl-8 md:p-0 p-8 lg:p-8 rounded-lg   duration-300 cursor-pointer group overflow-hidden"
    >
      {/* Image and content */}
      <img src={feature.img} alt={feature.title} className="w-20 h-20" />
      <div>
        <h3 className="font-semibold text-xl mb-2 text-[#212529]">
          {feature.title}
        </h3>
        <p className="text-[#626A77] text-base leading-relaxed">
          {feature.text}
        </p>
      </div>

      {/* Apply the blur effect on hover */}
      <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-opacity-40 transition-all duration-300"></div>

      {/* Button with Icon that appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 border-2 border-blue-500 hover:bg-white hover:text-blue-600 focus:outline-none transition duration-300 ease-in-out hover:scale-105 transform">
          <FaExternalLinkAlt className="text-lg" />
          <span className="text-sm font-medium">Visit</span>
        </button>
      </div>
    </div>
  ))}
</div>



      {/* Right Section: Registration Form */}
      <div className="lg:flex-[45%] md:flex-[40%] flex  justify-center items-center md:pr-8 ">
        <div className="relative lg:top-[-100px] md:top-[-100px] bg-white shadow-2xl p-10  rounded-2xl w-full max-w-[500px] mx-auto">
          <h2 className="lg:text-[26px] font-semibold mb-6 text-gray-700 ">
            Registration
            <br />
            for Course Enroll
          </h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-5 mb-6 bg-gray-100 rounded-full focus:outline-none focus:ring-2  transition duration-300 ease-in-out text-gray-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-5 mb-6 bg-gray-100 rounded-full focus:outline-none focus:ring-2  transition duration-300 ease-in-out text-gray-700"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-5 mb-6 bg-gray-100 rounded-full focus:outline-none focus:ring-2  transition duration-300 ease-in-out text-gray-700"
            />
            <div className="relative mb-8">
              <select
                className="w-full p-5 bg-gray-100 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Course
                </option>
                <option value="course1">Web Development</option>
                <option value="course2">Data Science</option>
                <option value="course3">Digital Marketing</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <FaAngleDown />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 border-2 border-blue-500 focus:outline-none transition duration-300 ease-in-out"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroRegistration;
