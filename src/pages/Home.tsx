import React from 'react'
import NavNavbar from '../components/NavNavbar'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import ExpertInstitution from '../components/ExpertInstitution'
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
      <Footer/>
    </div>
  )
}

export default Home