import React from 'react'
import NavNavbar from './components/NavNavbar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <NavNavbar/>
      <Navbar/>
      </Router>
    </div>
  )
}

export default App