import CourseCarousel from "../../components/CourseCarousel";
import advanceDiplomaData from "../../data/Diploma.json";
const AdvanceDiploma: React.FC = () => {
  return (
    <CourseCarousel
      data={advanceDiplomaData}
      heading="Advance Diploma"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/advanced-diploma"
    />
  );
};

export default AdvanceDiploma;
