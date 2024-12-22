import CourseData from '../assets/Courses.json';
import { useParams } from 'react-router-dom';
import { Course } from '../Interface/CourseType';
const CourseDetails:React.FC = () => {
  const {programCode} = useParams<{programCode:String}>();
  console.log(programCode);
  const findCourse = (courseType:String) : Course | undefined => {
    return CourseData[courseType].find((course:Course)=> course.courseOverview.programmeCode === programCode);
  }

  const courseTypes = ["Diploma", "Bachelor", "UK Higher Diploma", "Master", "Advance Diploma"];
  let course:Course | undefined;
  for (const type of courseTypes) {
    course = findCourse(type);
    if(course) break;
  }
  if(!course) return <h1>Course Not Found</h1>
    return (
        <div>
            <h1>Course Details</h1>
        </div>
    )
}


export default CourseDetails;