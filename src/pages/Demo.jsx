import React from 'react'
import {BsPersonCircle, BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'
import language from '../pictures/language.jpg'
import person1 from '../pictures/Profile Picture  (1).jpg'
import DemoNavbar from '../element/DemoNavbar'
import { mentors, subjectcourse } from '../data'

function Demo() {
  return (
    <>
    <div>
        {/* navbar */}
        <DemoNavbar/>
        
        {/* my agenda */}
        <div className="demosection">
            <div className="demomylearning">
                <div className="mylearningschedule">
                    <h1>My Agenda</h1>
                    <div className="demoschedulecontainer">
                        <h2>April 2023</h2>
                        <div className="demoschedule">
                            <p>Friday, 1st</p>
                            <p>Guitar Lesson</p>
                            <p>16.30 - 17.30</p>
                        </div>
                        <div className="demoschedule">
                            <p>Friday, 1st</p>
                            <p>Guitar Lesson</p>
                            <p>16.30 - 17.30</p>
                        </div>
                        <div className="demoschedule">
                            <p>Friday, 1st</p>
                            <p>Guitar Lesson</p>
                            <p>16.30 - 17.30</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="demosuggestedcourse"></div>
            <div className="demisuggestedmentor"></div>
        </div>

        {/* Suggested Course */}
        <div className="suggestedcourse">
            <h1>Suggested Course</h1>
            <div className="suggestedcoursecontainers">
                {subjectcourse.map((item)=> {
                    const {subject, skills, bgpic} = item;
                    return(
                    <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgpic})` }} className="suggestedcoursecontainer">
                    <h1>{subject}</h1>
                    <p>{skills}</p>
                </div>
                    )
                })}
                
            </div>
            <button className='suggestedmentorcardattributebutton'>Explore More</button>
        </div>

        {/* suggested mentor */}
        <div className="suggestedmentor">
            <h1>Suggested Mentor</h1>
            <div className="mentorssearch">
    { mentors.map((mentor)=>{
    const {name, position, courses, price, profilepic} = mentor;
    return (
        <div className="suggestedmentorcontainer">
                    <div className="suggestedmentorpicturecard">
                        <img src={profilepic} alt="" className="suggestedmentorpicture" />
                    </div>
                    <div className="suggestedmentorcardcontent">
                            <h1>{name}</h1>
                            <p>{position}</p>
                            <div className="flex-row">
                                <p>{courses}</p>
                                <div className="money">
                                    <FaMoneyBillWave/> {price}
                                </div>
                            </div>
                        </div>
                        <div className="suggestedmentorcardattribute">
                            <div className='suggestedmentorstar'>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarHalf/>
                                <BsStar/>
                            </div>
                            <button>see more</button>
                           
                        </div>
                </div>
    )
   })}
    </div>
            <button className='suggestedmentorbutton'>Explore More</button>
        </div>
        

    </div>
    </>
  )
}

export default Demo