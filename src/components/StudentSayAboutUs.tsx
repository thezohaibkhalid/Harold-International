// src/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Slide One',
    description: 'This is the first slide',
    image: 'https://via.placeholder.com/800x400?text=Slide+1',
  },
  {
    id: 2,
    title: 'Slide Two',
    description: 'This is the second slide',
    image: 'https://via.placeholder.com/800x400?text=Slide+2',
  },
  {
    id: 3,
    title: 'Slide Three',
    description: 'This is the third slide',
    image: 'https://via.placeholder.com/800x400?text=Slide+3',
  },
  // Add more slides as needed
];

const StudentSayAboutUs: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // Below 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto py-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4 rounded-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentSayAboutUs;
