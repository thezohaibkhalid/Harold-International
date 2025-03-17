import React from "react";
import certificateData from "../../data/Certificate.json";
import CourseCarousel from "../../components/CourseCarousel";
const Certificate: React.FC = () => {
  return (
    <CourseCarousel
      data={certificateData}
      heading="Certificate"
      subHeading="HICL University is where you can find your why"
      viewMorePath="/courses/certificate"
    />
  );
};

export default Certificate;
