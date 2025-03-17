import CoursesData from "../assets/Courses.json";
import { useParams } from "react-router-dom";
import { CourseInterface } from "../Interface/CourseType";

const CourseDetailsComp: React.FC = () => {
  const { programmeCode } = useParams<{ programmeCode: string }>();
  console.log(programmeCode);


  const findCourse = (courseType: String): CourseInterface | undefined => {
    const Courses = CoursesData[courseType];
    if (!Courses) return undefined;
    return Courses.find(
      (course: CourseInterface) =>
        course.courseOverview.programmeCode === programmeCode
    );
  };

  const courseTypes = [
    "Diploma",
    "Bachelor",
    "UK Higher Diploma",
    "Master",
    "Advance Diploma",
    "Certificate",
  ];
  let course: CourseInterface | undefined;

  for (const type of courseTypes) {
    course = findCourse(type);
    if (course) break;
  }
  console.log(course);
  if (!course) return <h1>Course Not Found</h1>;
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold mb-4">{course.courseName}</h2>
      <img src={course.courseOverview.image} alt={course.courseName} className="w-full h-60 object-cover mb-4" />
      <div className="text-lg text-gray-700 mb-4">
        <p><span className="font-bold">Programme Code:</span> {course.courseOverview.programmeCode}</p>
        <p><span className="font-bold">Duration of Study:</span> {course.courseOverview.durationOfStudy}</p>
        <p><span className="font-bold">Mode of Study:</span> {course.courseOverview.modeOfStudy}</p>
        <p><span className="font-bold">Campus:</span> {course.courseOverview.campus}</p>
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetailsComp;