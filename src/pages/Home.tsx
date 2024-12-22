import React from "react";
import NavNavbar from "../components/NavNavbar";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import ExpertInstitution from "../components/ExpertInstitution";
import CourseByCatrgory from "../components/CourseByCategory";
import StudentSayAboutUs from "../components/StudentSayAboutUs";
import CourseCarousel from "../components/CourseCarousel";
import Footer from "../components/Footer";
import HeroRegestration from "../components/HeroRegestration";
import Diploma from "../data/Diploma.json";
import UkHigherDiploma from "../data/UkHigherDiploma.json";
import Bachelor from "../data/Bachelor.json";
import Master from "../data/Master.json";
import AdvanceDiploma from "../data/AdvanceDiploma.json";
import Certificate from "../data/Certificate.json";
function Home() {
  return (
    <div>
      {/* <NavNavbar/> */}
      <Navbar />
      <HeroCarousel />
      <HeroRegestration />
      <ExpertInstitution />
      <CourseByCatrgory />
      <CourseCarousel
        data={{ Course: Diploma }}
        heading="Diploma"
        subHeading="HICL University is where you can find your why"
      />
      <CourseCarousel
        data={{ Course: AdvanceDiploma }}
        heading="Advance Diploma"
        subHeading="HICL University is where you can find your why"
      />
      <CourseCarousel
        data={{ Course: Bachelor }}
        heading="Bachelor"
        subHeading="HICL University is where you can find your why"
      />
      <CourseCarousel
        data={{ Course: Master }}
        heading="Master"
        subHeading="HICL University is where you can find your why"
      />
      <CourseCarousel
        data={{ Course: UkHigherDiploma }}
        heading="Uk Higher Diploma"
        subHeading="HICL University is where you can find your why"
      />
      <CourseCarousel
        data={{ Course: Certificate }}
        heading="Certificate"
        subHeading="HICL University is where you can find your why"
      />

      <StudentSayAboutUs />
      <Footer />
    </div>
  );
}

export default Home;
