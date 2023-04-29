import React from 'react'
import {BsPersonCircle, BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'
import language from '../pictures/language.jpg'
import person1 from '../pictures/Profile Picture  (1).jpg'
import DemoNavbar from '../element/DemoNavbar'
import {mentors} from "../data"

function MentorsContainer() {
  return (
    <>
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
   
    </>
  )
}

export default MentorsContainer