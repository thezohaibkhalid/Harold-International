<<<<<<< HEAD
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
// import {CourseInterface, Course} from "./../Interface/CourseType"
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

      <StudentSayAboutUs />
      <Footer />
=======
import React from 'react'
import NavNavbar from '../components/NavNavbar'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import ExpertInstitution from '../components/ExpertInstitution'
import CourseByCatrgory from '../components/CourseByCategory'
import StudentSayAboutUs from '../components/StudentSayAboutUs'
import Footer from '../components/Footer'


import HeroRegestration from '../components/HeroRegestration'
function Home() {
  return (
    <div>
              {/* <NavNavbar/> */}
      <Navbar/>
      <HeroCarousel/>
      <HeroRegestration/>
      <ExpertInstitution/>
      <CourseByCatrgory/>
      <StudentSayAboutUs/>
      <Footer/>
>>>>>>> parent of ba88152 (Logics)
    </div>
  );
}

export default Home;
