import React from 'react'
import heropicture from '../pictures/hero-picture.jpg';

function LandingPage() {
  return (
    <div className="landingpage">
        <div className="navbar">
            <div className="logo">
                <h3>LocalMentorConnect</h3>
            </div>
            <div className="navbarbutton">
                <button className='navbarbuttoncolor'>Log In</button>
                <button>Sign In</button>
                <button>Demo</button>
            </div>
        </div>
        <div className="hero">
          <div className="herocontainer">
            <h1>Your Mentor is closer than you think</h1>
              <p>Connect with expert mentors in your community and unlock your full potential
              </p>
          </div>
          <div className="signupsection">
            <div className="signupcontainers">
              <div className="signupcontainer">
                <h1>Become A Mentor</h1>
                <p>Make a meaningful impact by becoming a mentor
                  and helping others reach their full potential
                </p>
                <button>Sign Up</button>
              </div>
              <div className="signupcontainer">
                <h1>Find A Mentor</h1>
                <p> Discover your passion and get the support you 
                  need to achieve success with our mentor matching service
                </p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage