import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./leading.css";

const StudentSayAboutUs = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Handlers for custom navigation buttons
  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="w-full bg-[#3070E6] text-white py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:pb-20 md:px-8 lg:px-16 h-auto lg:h-[423px] md:h-[400px]">
      <div className="w-full sm:w-[90%] mx-auto flex flex-col md:flex-row items-center lg:space-y-8 md:space-y-4 space-y-6">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold mb-4 leading-tight lg:leading-snug">
            Student Say <br /> About Us.
          </h2>
          {/* Desktop navigation arrows */}
          <div className="hidden md:flex justify-start space-x-4 mt-6">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-1/2 relative">
          <Slider ref={sliderRef} {...settings}>
            {/* Slide 1 */}
            <div className="text-white p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-10 leading-relaxed max-h-[200px] overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                placeat perspiciatis unde laboriosam? Commodi est perferendis at
                unde repellendus a, accusantium reiciendis sit expedita
                dignissimos iusto, vitae totam, provident non.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User"
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-sm sm:text-base lg:text-xl">
                    Jane Doe
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-base">
                    Manager, Tatva Soft
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="text-white p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-10 leading-relaxed max-h-[200px] overflow-hidden">
                Another slide content here for testing. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Modi placeat perspiciatis
                unde laboriosam? Commodi est perferendis at unde repellendus a,
                accusantium reiciendis sit expedita dignissimos iusto, vitae
                totam, provident non.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User"
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-sm sm:text-base lg:text-xl">
                    John Smith
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-base">
                    Developer, Tatva Soft
                  </p>
                </div>
              </div>
            </div>
          </Slider>

          {/* Mobile navigation arrows */}
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSayAboutUs;
