import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import {CourseInterface} from '../Interface/CourseType'

interface CourseDetailProps {
  data: CourseInterface;  
  heading: string;
  subHeading: string;
}
const CourseCarousel:React.FC<CourseDetailProps> =({data, heading, subHeading}) => {
  const navigate = useNavigate();
  const Course = data.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const handleCourseClick = (course) => {
    navigate(`/course/${course.courseOverview.programmeCode}`);
  };

  return (
    <div className="text-center my-10 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-600 text-lg mb-8">
        {subHeading}
      </p>
      <Slider {...settings}>
        {Course.map((course, index) => (
          <div key={index} className="p-4 cursor-pointer" onClick={() => handleCourseClick(course)}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={course.courseOverview.image} alt={course.courseName} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.courseName}</h3>
                <div className="text-sm text-gray-700 mb-4">
                  <p><span className="font-bold">Programme Code:</span> {course.courseOverview.programmeCode}</p>
                  <p><span className="font-bold">Duration of Study:</span> {course.courseOverview.durationOfStudy}</p>
                  <p><span className="font-bold">Mode of Study:</span> {course.courseOverview.modeOfStudy}</p>
                  <p><span className="font-bold">Campus:</span> {course.courseOverview.campus}</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
        View More
      </button>
    </div>
  );
};

export default CourseCarousel;