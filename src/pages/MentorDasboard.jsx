import React from 'react'
import DemoNavbar from '../element/DemoNavbar'

function MentorDasboard() {
  return (
    <>
    <DemoNavbar/>
    <div className='mentordashboardcontainer'>
        <h1>You're not register as Mentor yet</h1>
            <div className="signupcontainer">
                <h1>Become A Mentor</h1>
                <p>Make a meaningful impact by becoming a mentor
                  and helping others reach their full potential
                </p>
                <button>Sign Up</button>
              </div>
    </div>
    </>
  )
}

export default MentorDasboard