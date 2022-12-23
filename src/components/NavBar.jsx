import React from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function NavBar() {
  
  return (
    <div>
      <div className='Nav-container'>
        <a href="#HelloWord" className='Nav-icons' title='Hello Word'><Icon.House/></a>
        <a href="#AboutMe" className='Nav-icons' title='About Me'><Icon.Person/></a>
        <a href="#Experience" className='Nav-icons' title='My Experience'><Icon.Journal/></a>
        <a href="#Projects" className='Nav-icons' title='My Projects'><Icon.CupHot/></a>
        <a href="#Contact" className='Nav-icons' title='Contact Me'><Icon.Telephone/></a>
      </div>
    </div>
  )
}
