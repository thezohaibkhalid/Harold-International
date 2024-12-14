import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import banner from "../assets/banner.jpeg";
import banner1 from "../assets/banner_1.png";
import banner2 from "../assets/banner_2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute hidden lg:block md:block top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500 text-white rounded-full items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 z-10 shadow-lg"
        aria-label="Previous Slide"
      >
        <FaArrowLeft className="h-6 ml-3" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute hidden lg:block md:block top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500 text-white rounded-full items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 z-10 shadow-lg"
        aria-label="Next Slide"
      >
        <FaArrowRight className="h-6 ml-3" />
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
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="relative w-full lg:h-[800px] md:h-[800px] h-[500px] overflow-hidden cursor-pointer">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[800px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent to-blue-300 opacity-70"></div>
            </div>
            <div className="relative lg:w-[80%] md:w-[90%] w-[95%] mx-auto lg:h-[800px] md:h-[800px] h-[500px] flex items-center justify-center">
              <div className="text-center text-white">
                <motion.p
                  key={`subtitle-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -50,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-lg lg:text-2xl md:text-2xl"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  key={`title-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 50,
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="lg:text-6xl w-[80%] mx-auto md:text-6xl text-3xl font-bold lg:pt-[20px] lg:pb-[36px] md:pt-[20px] md:pb-[36px] pt-3 pb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.button
                  key={`button-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  onClick={() => window.location.href = slide.buttonLink}
                  className="lg:px-6 lg:py-3 md:px-5 md:py-2 px-4 py-3 text-sm lg:text-lg bg-transparent text-white font-medium rounded-full border-2 border-white hover:border-blue-500 hover:bg-blue-500 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md hover:shadow-lg"
                >
                  {slide.buttonText}
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
