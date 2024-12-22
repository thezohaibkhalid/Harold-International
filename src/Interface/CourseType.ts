export interface CourseOverview {
    programmeCode: string;
    durationOfStudy: string;
    modeOfStudy: string;
    campus: string;
    image: string;
  }
  
  export interface Course {
    courseName: string;
    courseOverview: CourseOverview;
  }
  
  export interface CourseData {
    Course: Course[];
  }
  