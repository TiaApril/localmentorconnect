import React from 'react'
import {BsPersonCircle, BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'
import language from '../pictures/language.jpg'
import person1 from '../pictures/Profile Picture  (1).jpg'

function Demo() {
  return (
    <>
    <div>
        {/* navbar */}
        <div className="demonavbar">
            <h3>LocalMentorConnect</h3>
            <div className="demonavbarmenu">
                <a href="">Home</a>
                <a href="">Dashboard</a>
                <a href="">Courses</a>
                <a href="">Mentors</a>
                <a href="">Events</a>
                <a href="">
                    <BsPersonCircle/>
                </a>
            </div>
        </div>
        
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
                <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${language})` }} className="suggestedcoursecontainer">
                    <h1>ART</h1>
                    <p>5 skills</p>
                </div>
                <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${language})` }} className="suggestedcoursecontainer">
                    <h1>ART</h1>
                    <p>5 skills</p>
                </div>
                <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${language})` }} className="suggestedcoursecontainer">
                    <h1>ART</h1>
                    <p>5 skills</p>
                </div>
                <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${language})` }} className="suggestedcoursecontainer">
                    <h1>ART</h1>
                    <p>5 skills</p>
                </div>
            </div>
            <button className='suggestedmentorcardattributebutton'>Explore More</button>
        </div>

        {/* suggested mentor */}
        <div className="suggestedmentor">
            <h1>Suggested Mentor</h1>
            <div className="suggestedmentorcontainers">
                <div className="suggestedmentorcontainer">
                    <div className="suggestedmentorpicturecard">
                        <img src={person1} alt="" className="suggestedmentorpicture" />
                    </div>
                    <div className="suggestedmentorcardcontent">
                            <h1>Anthony van Diesel</h1>
                            <p>Art Teacher</p>
                            <div className="flex-row">
                                <p>20 courses</p>
                                <div className="money">
                                    <FaMoneyBillWave/> IDR 20k/hr
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
                <div className="suggestedmentorcontainer">
                    <div className="suggestedmentorpicturecard">
                        <img src={person1} alt="" className="suggestedmentorpicture" />
                    </div>
                    <div className="suggestedmentorcardcontent">
                            <h1>Anthony van Diesel</h1>
                            <p>Art Teacher</p>
                            <div className="flex-row">
                                <p>20 courses</p>
                                <div className="money">
                                    <FaMoneyBillWave/> IDR 20k/hr
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
                <div className="suggestedmentorcontainer">
                    <div className="suggestedmentorpicturecard">
                        <img src={person1} alt="" className="suggestedmentorpicture" />
                    </div>
                    <div className="suggestedmentorcardcontent">
                            <h1>Anthony van Diesel</h1>
                            <p>Art Teacher</p>
                            <div className="flex-row">
                                <p>20 courses</p>
                                <div className="money">
                                    <FaMoneyBillWave/> IDR 20k/hr
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
            </div>
            <button className='suggestedmentorbutton'>Explore More</button>
        </div>
        

    </div>
    </>
  )
}

export default Demo