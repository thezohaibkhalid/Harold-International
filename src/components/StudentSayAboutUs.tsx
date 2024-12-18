import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './leading.css';
const StudentSayAboutUs = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    // autoplay: true,
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
    <div className="w-full bg-[#3070E6] text-white py-16 px-4 md:px-8 lg:px-16 h-[423px]">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2  lg:mt-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-[60px] font-bold mb-4 leading-provider">Student Say <br />About Us.</h2>
          <div className="flex space-x-4 mt-6">
            {/* Custom Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out  cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-white hover:bg-white hover:text-blue-600 transform duration-300 ease-in-out  cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full md:w-1/2">
          <Slider ref={sliderRef} {...settings}>
            {/* Slide 1 */}
            <div className="text-white  p-6 rounded-lg">
              <p className="text-sm md:text-base lg:text-xl mb-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugit eveniet aliquam voluptas et harum, aperiam exercitationem nisi culpa iure quas similique quaerat tempora, illum velit blanditiis est voluptates enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, alias possimus! Sapiente volupta. Aliquid dicta ipsam, modi minus neque magni ducimus.
              </p>
              <div className="flex items-center space-x-8 ">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-[70px] h-[70px] rounded-full"
                />
                <div>
                  <h3 className="font-medium lg:text-xl">Adam Smith</h3>
                  <p className="text-gray-200 text-base">Manager, Tatva Soft</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg">
              <p className="text-sm md:text-base mb-4">
                Haggle cheesed off butty say cup of char spiffing good time bum bag so
                I said gutted mate.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Jane Doe</h3>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StudentSayAboutUs;
