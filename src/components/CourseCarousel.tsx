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
  };

  return (
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
  );
};

export default CourseCarousel;

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
