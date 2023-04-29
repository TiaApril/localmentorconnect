import React from 'react'
import DemoNavbar from '../element/DemoNavbar'
import MentorsFilter from '../element/MentorsFilter'
import MentorsContainer from '../element/MentorsContainer'

function MentorsSearch() {
  return (
    <>
    <DemoNavbar/>
    <div className='mentorssearchcontainer'>
      <MentorsFilter/>
      <MentorsContainer/>
    </div>
    </>
  )
}

export default MentorsSearch