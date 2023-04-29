import React, { useContext } from 'react'
import {BsPersonCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { AppContext } from '../context';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';


function DemoNavbar() {

  return (
    
    <div className="demonavbar">
            <h3>LocalMentorConnect</h3>
            <div className="demonavbarmenu">
                <Link to='/'>Home</Link>
                <a className='dropdown'>
                  <a className="dropbtn">Dashboard</a>
                  <div id="myDropdown" className="dropdown-content">
                    <a><Link to='/demo'>Mantee</Link></a>
                    <a><Link to='/mentordashboard'>Mentor</Link></a>
                  </div>
                </a>
                {/* <a href="" onClick={displayDashboard}>Dashboard</a> */}
                <Link to='/coursesearch'>Courses</Link>
                <Link to='/mentorssearch'>Mentors</Link>
                <Link to='/'>Events</Link>
                <Link><BsPersonCircle style={{color:'black', background: 'black'}}/></Link>
            </div>
        </div>
  )
}

export default DemoNavbar