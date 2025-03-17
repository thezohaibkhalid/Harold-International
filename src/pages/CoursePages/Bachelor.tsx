import React from "react";
import CourseCarousel from "../../components/CourseCarousel";
import bachelorData from "../../data/Bachelor.json";
const Bachelor: React.FC = () => {
  return (
    <CourseCarousel
      data={bachelorData}
      heading="Bachelor"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/bachelor"
    />
  );
};

export default Bachelor;
