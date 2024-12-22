import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoursesPage from './pages/Course';
import CourseDetail from './pages/CourseDetails';

function App() {
  return (
    <div className='font-poppins'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:programmeCode" element={<CourseDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;