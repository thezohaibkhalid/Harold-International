import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseByCatrgory = () => {
  const [activeSlide, setActiveSlide] = useState(0);  

  const categories = [
    {
      title: "Math & Logic",
      courses: "18 Courses",
      color: "#EEF4FF",
      text_color: "#2874FF",
      icon: "/src/assets/business_math.png",
    },
    {
      title: "Technology",
      courses: "3 Courses",
      color: "#FFF9ED",
      text_color: "#FBB329",
      icon: "/src/assets/computer_technology.png",
    },
    {
      title: "IT & Software",
      courses: "3 Courses",
      color: "#ECFBF0",
      text_color: "#15CD3C",
      icon: "/src/assets/data_it.png",
    },
    {
      title: "Arts & Humanities",
      courses: "10 Courses",
      color: "#FFEDF7",
      text_color: "#FF4F8D",
      icon: "/src/assets/art_Language.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next), // Update active slide index
    customPaging: (index) => {
      const dotColor = categories[(index + activeSlide) % categories.length].text_color; // Rotating colors
      return (
        <div
          className=" h-3 w-3 rounded-full mx-1 transition-all duration-300 "
          style={{
            backgroundColor: dotColor,
            opacity: activeSlide === index ? 1 : 0.5,
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <ul className="flex justify-center items-center gap-2">{dots}</ul>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center lg:text-4xl text-3xl font-bold mb-6">
        Browse Courses by Categories
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Explore courses that help you master the skills you love.
      </p>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4">
            <div
              className="flex flex-col justify-center items-center rounded-lg h-[270px] shadow-md"
              style={{ backgroundColor: category.color }}
            >
              <div className="mb-4">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-[75px] h-[75px] object-contain"
                />
              </div>
              <h3
                className="text-lg font-medium"
                style={{ color: category.text_color }}
              >
                {category.title}
              </h3>
              <p style={{ color: category.text_color }}>{category.courses}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseByCatrgory;
