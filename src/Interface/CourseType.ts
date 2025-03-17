export interface CourseInterface {

  courseName: string;

  courseOverview: {

    programmeCode: string;

    durationOfStudy: string;

    modeOfStudy: string;

    campus: string;

    image: string;

  };

}
interface CourseOverview {
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

