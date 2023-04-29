import React from 'react'
import DemoNavbar from '../element/DemoNavbar'
import 'react-bootstrap'
import CourseFilter from '../element/CourseFilter'
import CourseContainer from '../element/CourseContainer'

function CoursesSearch() {
  return (
    <>
    <DemoNavbar/>
    <div className="coursesearchcontainer">
      {/* <div className="coursesearchmatches">
        <h3>3 matches found</h3>
      </div> */}
     
        <CourseFilter/>
        <CourseContainer/>
        
    
    </div>
    </>
    
    
  )
}

export default CoursesSearch