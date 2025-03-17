import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/CoursePages/Course';
import CourseDetail from './pages/CourseDetails';
import AdvanceDiploma from './pages/CoursePages/AdvanceDiploma';
import Bachelor from './pages/CoursePages/Bachelor';
import Certificate from './pages/CoursePages/Certificate';
import Diploma from "./pages/CoursePages/Diploma";
import Master from "./pages/CoursePages/Master";
import UkHigherDiploma from './pages/CoursePages/UkHigherDiploma';
function App() {
  return (
    <div className='font-poppins'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:programmeCode" element={<CourseDetail />} />
          <Route path="/courses/advanced-diploma" element={<AdvanceDiploma />} />
          <Route path="/courses/bachelor" element={<Bachelor />} />
          <Route path="/courses/certificate" element={<Certificate />} />
          <Route path="/courses/diploma" element={<Diploma />} />
          <Route path="/courses/master" element={<Master />} />
          <Route path="/courses/uk-higher-diploma" element={<UkHigherDiploma />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App