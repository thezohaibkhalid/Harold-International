import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='font-poppins'>
      <Router>
      <Home/>
      </Router>
    </div>
  )
}

export default App