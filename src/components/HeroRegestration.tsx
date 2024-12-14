import React from "react";
import course_1 from "../assets/course_1.svg";
import course_2 from "../assets/course_2.svg";
import course_3 from "../assets/course_3.svg";
import course_4 from "../assets/course_4.svg";
import course_5 from "../assets/course_5.svg";
import course_6 from "../assets/course_6.svg";

const features = [
//   { id: 1, img: course_1, title: "Next Scheduled", text: "Stay updated with your upcoming courses and events." },
  { id: 2, img: course_2, title: "Online Courses", text: "Access a variety of online courses anytime, anywhere." },
  { id: 3, img: course_3, title: "Graduation", text: "Achieve your milestones and graduate successfully." },
//   { id: 4, img: course_4, title: "University Life", text: "Experience an enriching and vibrant university life." },
  { id: 5, img: course_5, title: "London School of Language", text: "Master new languages with professional courses." },
  {
    id: 6,
    img: course_6,
    title: "London School of Tourism and Hospitality",
    text: "Explore career opportunities in tourism and hospitality.",
  },
];

const HeroRegistration: React.FC = () => {
  return (
    <div className="max-w-[1520px] mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-24 py-16">
      {/* Left Section: Features */}
      <div className="flex-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div   
            key={feature.id}
            className="space-y-6 items-start gap-4 p-4 rounded-lg  hover:shadow-lg transition-shadow duration-300"
          >
            <img src={feature.img} alt={feature.title} className="w-18 h-18" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Registration Form */}
      <div className="flex-[30%]  flex justify-center items-center">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Enroll in a Course</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="w-full p-3 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a Course
              </option>
              <option value="course1">Web Development</option>
              <option value="course2">Data Science</option>
              <option value="course3">Digital Marketing</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Apply Now
            </button>
          </form>
          <div className="flex justify-center mt-6 space-x-6 text-blue-600 font-bold text-lg">
            <div className="text-center">
              <span className="block">715</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <div className="text-center">
              <span className="block">18</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <div className="text-center">
              <span className="block">59</span>
              <span className="text-xs text-gray-500">Minutes</span>
            </div>
            <div className="text-center">
              <span className="block">38</span>
              <span className="text-xs text-gray-500">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegistration;
