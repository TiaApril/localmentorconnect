import CoursesSearch from './pages/CoursesSearch';
import Demo from './pages/Demo';
import LandingPage from './pages/LandingPage';
import CourseFilter from './element/CourseFilter';
import CourseContainer from './element/CourseContainer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentorsSearch from './pages/MentorsSearch';
import SignIn from './element/SignIn';
import LogIn from './element/LogIn';
import MentorDasboard from './pages/MentorDasboard';



function App() {
  return (
  <>
  <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
        <Route path='/coursesearch' element={<CoursesSearch/>}></Route>
        <Route path='/mentorssearch' element={<MentorsSearch/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/mentordashboard' element={<MentorDasboard/>}></Route>


      </Routes>
      
    </Router>
  </>
    

      
      
   
  );
}

export default App;


