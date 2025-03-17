import CourseCarousel from "../../components/CourseCarousel";

// Json data imports
import AdvanceDiploma from "../../data/AdvanceDiploma.json";
import Bachelor from "../../data/Bachelor.json";
import Certificate from "../../data/Certificate.json";
import Diploma from "../../data/Diploma.json";
import Master from "../../data/Master.json";
import UkHigherDiploma from "../../data/UkHigherDiploma.json";

// Interface Import
import { CourseInterface } from "../../Interface/CourseType";

const Courses: React.FC = () => {
  return (
    <>
      <CourseCarousel
        data={Diploma}
        heading="Diploma"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/diploma"
      />
      <CourseCarousel
        data={UkHigherDiploma}
        heading="Uk Higher Diploma"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/uk-higher-diploma"
      />
      <CourseCarousel
        data={AdvanceDiploma}
        heading="Advance Diploma"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/advanced-diploma"
      />
      <CourseCarousel
        data={Bachelor}
        heading="Bachelor"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/bachelor"
      />
      <CourseCarousel
        data={Master}
        heading="Master"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/master"
      />
      <CourseCarousel
        data={Certificate}
        heading="Certificate"
        subHeading="HICL University is where you can find your why"
        viewMorePath="/courses/certificate"
      />
    </>
  );
};

export default Courses;
