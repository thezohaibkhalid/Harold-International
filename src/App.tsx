import React from 'react'
import NavNavbar from './components/NavNavbar'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='font-poppins'>
      <Router>
      {/* <NavNavbar/> */}
      <Navbar/>
      <HeroCarousel/>
      </Router>
    </div>
  )
}

export default App