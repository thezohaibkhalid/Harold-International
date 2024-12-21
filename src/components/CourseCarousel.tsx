import React from 'react';
import Slider from 'react-slick';
import CourseCard from './CourseCard';
import { Course } from '../interfaces/Course';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CoursesCarouselProps {
  courses: Course[];
  title: string;
}

const CoursesCarousel: React.FC<CoursesCarouselProps> = ({ courses, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: courses.length >= 3 ? 3 : courses.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: courses.length >= 2 ? 2 : courses.length,
        }
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">{title}</h2>
      <Slider {...settings}>
        {courses.map(course => (
          <div key={course.id} className="px-2">
            <CourseCard course={course} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoursesCarousel;
