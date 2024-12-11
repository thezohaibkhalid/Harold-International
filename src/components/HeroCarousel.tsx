import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner from "../assets/banner.jpeg";
import banner1 from "../assets/banner_1.png";
import banner2 from "../assets/banner_2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HeroCarousel.css'
const slides = [
  {
    image: banner,
    title: "Education is the best key to success in life",
    subtitle: "Welcome to Our Varsity",
    buttonText: "Our Courses",
    buttonLink: "/courses",
  },
  { 
    image: banner1,
    title: "Learn from the best educators",
    subtitle: "Achieve Your Dreams",
    buttonText: "Join Now",
    buttonLink: "/join",
  },
  {
    image: banner2,
    title: "Explore endless opportunities",
    subtitle: "Your Future Awaits",
    buttonText: "Discover More",
    buttonLink: "/discover",
  },
];

const HeroCarousel: React.FC = () => {
  // Custom arrows
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center z-10"
        aria-label="Previous Slide"
      >
        <FaArrowLeft />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center z-10"
        aria-label="Next Slide"
      >
        <FaArrowRight />
      </button>
    );
  };

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "10px",
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-gray-400 rounded-full transition-all hover:bg-white"></div>
    ),
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[800px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                <a
                  href={slide.buttonLink}
                  className="px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-600 text-white rounded transition-all"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
