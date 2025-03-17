<<<<<<< HEAD
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { CourseInterface } from "../Interface/CourseType";

interface CourseDetailProps {
  data: CourseInterface[];
  heading: string;
  subHeading: string;
  viewMorePath: string;
}

const CourseCarousel: React.FC<CourseDetailProps> = ({
  data,
  heading,
  subHeading,
  viewMorePath,
}) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const isLimitedView = currentPath === "/" || currentPath === "/courses";
  const displayedCourses = isLimitedView ? data.slice(0, 6) : data;

  const handleCourseClick = (course: CourseInterface) => {
    navigate(`/course/${course.courseOverview.programmeCode}`);
=======
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CourseCarousel = ({ courses }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
>>>>>>> parent of ba88152 (Logics)
  };

  const handleViewMoreClick = () => {
    navigate(viewMorePath);
  };

  return (
<<<<<<< HEAD
    <div className="text-center my-10 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-600 text-lg mb-8">{subHeading}</p>
      {isLimitedView ? (
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          {displayedCourses.map((course, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={course.courseOverview.image}
                  alt={course.courseName}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {course.courseName}
                  </h3>
                  <div className="text-sm text-gray-700 mb-4">
                    <p>
                      <span className="font-bold">Programme Code:</span>{" "}
                      {course.courseOverview.programmeCode}
                    </p>
                    <p>
                      <span className="font-bold">Duration of Study:</span>{" "}
                      {course.courseOverview.durationOfStudy}
                    </p>
                    <p>
                      <span className="font-bold">Mode of Study:</span>{" "}
                      {course.courseOverview.modeOfStudy}
                    </p>
                    <p>
                      <span className="font-bold">Campus:</span>{" "}
                      {course.courseOverview.campus}
                    </p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedCourses.map((course, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={course.courseOverview.image}
                  alt={course.courseName}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {course.courseName}
                  </h3>
                  <div className="text-sm text-gray-700 mb-4">
                    <p>
                      <span className="font-bold">Programme Code:</span>{" "}
                      {course.courseOverview.programmeCode}
                    </p>
                    <p>
                      <span className="font-bold">Duration of Study:</span>{" "}
                      {course.courseOverview.durationOfStudy}
                    </p>
                    <p>
                      <span className="font-bold">Mode of Study:</span>{" "}
                      {course.courseOverview.modeOfStudy}
                    </p>
                    <p>
                      <span className="font-bold">Campus:</span>{" "}
                      {course.courseOverview.campus}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button className="w-[50%] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      Enroll Now
                    </button>
                    <button className="w-[50%] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isLimitedView && (
        <button
          onClick={handleViewMoreClick}
          className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View More
        </button>
      )}
    </div>
=======
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on the server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 0.5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={"desktop"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <div className="course-image">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>Course Overview:</p>
            <ul>
              <li>Programme Code: {course.code}</li>
              <li>Duration of Study: {course.duration}</li>
              <li>Mode of Study: {course.mode}</li>
              <li>Campus: {course.campus}</li>
            </ul>
            <div className="course-actions">
              <button className="btn btn-primary">Enroll Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
>>>>>>> parent of ba88152 (Logics)
  );
};

export default CourseCarousel;
<<<<<<< HEAD
=======

// Example usage:
// const courses = [
//   {
//     title: "UK Higher Diploma in International Hotel Management",
//     code: "UH312318",
//     duration: "2 Years",
//     mode: "Full-Time / Part-Time",
//     campus: "London",
//     image: "path-to-image.jpg",
//   },
//   {
//     title: "Business Strategy",
//     code: "BS12345",
//     duration: "6 Months",
//     mode: "Part-Time",
//     campus: "Manchester",
//     image: "path-to-image.jpg",
//   },
// ];
>>>>>>> parent of ba88152 (Logics)
