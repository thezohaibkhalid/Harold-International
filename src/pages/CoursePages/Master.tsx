import React from "react";
import CourseCarousel from "../../components/CourseCarousel";
import masterData from "../../data/Master.json";
const Master: React.FC = () => {
  return (
    <CourseCarousel
      data={masterData}
      heading="Master"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/master"
    />
  );
};

export default Master;
