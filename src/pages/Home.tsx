import React from 'react'
import NavNavbar from '../components/NavNavbar'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import ExpertInstitution from '../components/ExpertInstitution'
import CourseByCatrgory from '../components/CourseByCategory'
import StudentSayAboutUs from '../components/StudentSayAboutUs'
import CourseCarousel from '../components/CourseCarousel'
import Footer from '../components/Footer'
import Diploma from '../data/Diploma.json'


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
      <CourseCarousel  data={Diploma} />
      <StudentSayAboutUs/>
      <Footer/>
    </div>
  )
}

export default Home