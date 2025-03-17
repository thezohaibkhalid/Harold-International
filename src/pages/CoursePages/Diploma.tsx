import React from "react";
import diplomaData from "../../data/Diploma.json";
import CourseCarousel from "../../components/CourseCarousel";
const Diploma: React.FC = () => {
  return (
    <CourseCarousel
      data={diplomaData}
      heading="Diploma"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/diploma"
    />
  );
};

export default Diploma;
