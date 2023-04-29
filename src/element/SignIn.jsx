import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='signincontainer'>
        <h1>SIGN UP</h1>
        <div className='usersignupcontainer'>
            <label><b>Username</b></label>
            <input type="text" placeholder='Enter Username' required />
            <label><b>Email</b></label>
            <input type="email" placeholder='Enter Email Address' required />
            <label><b>Password</b></label>
            <input type="password" placeholder='Enter Password' required />
            <button type='submit'>Sign Up</button>
            <div className='signupfooter'>
            <Link to='/'><button>Cancel</button></Link>
                <a href="">Have an account? <b>Log In</b></a>
            </div>
        </div>

    </div>
    
  )
}

export default SignIn