import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BachelorCourses from '../data/Bachelor.json';
import MasterCourses from '../data/Master.json';
import DiplomaCourses from '../data/Diploma.json';
import { Course } from '../interfaces/Course';
import { FaArrowLeft, FaInfoCircle, FaPaperPlane } from 'react-icons/fa';

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Combine all courses into a single array
  const allCourses: Course[] = [...BachelorCourses, ...MasterCourses, ...DiplomaCourses];
  
  // Find the course by ID
  const course = allCourses.find(course => course.id === id);
  
  if (!course) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-500">Course Not Found</h2>
        <Link to="/" className="text-blue-500 flex items-center justify-center mt-4">
          <FaArrowLeft className="mr-2" /> Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10">
      <Link to="/" className="text-blue-500 flex items-center mb-4">
        <FaArrowLeft className="mr-2" /> Back to Courses
      </Link>
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{course.courseName}</h1>
      <p><strong>Programme Code:</strong> {course.programmeCode}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Mode of Study:</strong> {course.modeOfStudy.join(', ')}</p>
      <p><strong>Delivery Method:</strong> {course.deliveryMethod.join(', ')}</p>
      {course.campus && <p><strong>Campus:</strong> {course.campus}</p>}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Course Details</h2>
        <p>
          {/* Replace this placeholder with actual course details */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
      </div>
      <div className="mt-6 flex space-x-4">
        {course.callToActions.requestInfo && (
          <button
            onClick={() => alert(`Request information for: ${course.courseName}`)}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            <FaInfoCircle className="mr-2" /> Request Info
          </button>
        )}
        {course.callToActions.applyNowLink && (
          <a href={course.callToActions.applyNowLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
              <FaPaperPlane className="mr-2" /> Apply Now
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
