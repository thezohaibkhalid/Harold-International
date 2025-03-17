import React from "react";
import CourseCarousel from "../../components/CourseCarousel";
import ukHigherDiplomaData from "../../data/UkHigherDiploma.json";
const UkHigherDiploma: React.FC = () => {
  return (
    <CourseCarousel
      data={ukHigherDiplomaData}
      heading="Uk Higher Diploma"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/uk-higher-diploma"
    />
  );
};

export default UkHigherDiploma;
