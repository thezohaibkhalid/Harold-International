import React from 'react'
import NavNavbar from './components/NavNavbar'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import HeroRegestration from './components/HeroRegestration'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='font-poppins'>
      <Router>
      {/* <NavNavbar/> */}
      <Navbar/>
      <HeroCarousel/>
      <HeroRegestration/>
      </Router>
    </div>
  )
}

export default App