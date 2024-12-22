import React from 'react';
import coursesData from '../data/Diploma.json';
import { useNavigate } from 'react-router-dom';
import { CourseInterface } from '../Interface/CourseType';

const CoursesPage = () => {
  const navigate = useNavigate();
  const diplomaCourses = coursesData.Diploma;

  const handleCourseClick = (course:CourseInterface) => {
    navigate(`/course/${course.courseOverview.programmeCode}`);
  };

  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold mb-4">All Diploma Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diplomaCourses.map((course:CourseInterface, index:number) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;