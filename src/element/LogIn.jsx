import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className='logincontainer'>
        <h1>LOG IN</h1>
        <div className='userlogincontainer'>
            <label><b>Username</b></label>
            <input type="text" placeholder='Enter Username' required />
            <label><b>Password</b></label>
            <input type="password" placeholder='Enter Password' required />
            <button type='submit'>Signup</button>
            <a href="">forget password</a>
            <div className='loginfooter'>
                <Link to='/'><button>Cancel</button></Link>
                <a href="">Don't have an account? <b>Sign Up</b></a>
            </div>
        </div>
    </div>
  )
}

export default LogIn