import React from 'react'
import profile1 from '../pictures/Profile Picture  (1).jpg'
import language from '../pictures/language.jpg';
import {courses} from '../data'
import CourseFilter from './CourseFilter';


function CourseContainer() {
  return (
    <>
    
    <div className="courseresultcontainer">
    {courses.map((course)=>{
      const {subject, skill, price, instructor, bg, profilepic, title} = course;
      return (
        
      
        <div className="card">
      <div className="img-avatar">
        <img src={profilepic} alt="" />
      </div>
      <div className="card-text">
        <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${language})` }}  className="portada">
        
        
        </div>
        <div className="title-total">
        <div>
                <div className="title">{subject}</div>
                  <h2>{title}</h2>
        
                  <div className="desc">With {instructor}</div>
                  <div className='actions'>
                  <p>{price}</p>
                  <button>More Info</button>
                </div>
              </div>
     
      </div>
     
      </div>
      
     
      
        </div>
        
      
      

    )     

    })}
    </div>

    </>
  )
}

export default CourseContainer