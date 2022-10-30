import React from 'react'
import './index.css'
import noise from '../../assets/noise.png'
import logo from '../../assets/logo.png'
import ribbon from '../../assets/ribbon.png'
import tablet from '../../assets/tablet.png' 
import rod from '../../assets/rod.png' 
import weirdShape from '../../assets/weird-shape.png' 
import titleGraphic from '../../assets/title-graphic.png' 

const Header = () => {
  return (
    <div className='header-container'>

        <div className='navbar-container'>
          <img src={logo} className='logo'/>
          <p className='navbar-button'>Home</p>
          <p className='navbar-button'>My Projects</p>
          <p className='navbar-button'>About Me</p>
          <div className='navbar-contact-button'>
            <p>My Work</p>
          </div>
        </div>


        <div className='section-container'>
          <div className='first-section'>
            <img src={titleGraphic} className='title-graphic'/>
            <p className='first-section-body-text'>
              Hello, I'll keep it short and to the point, 
              if you're in need of a website developer,
              or someone that could create desktop software,
              then I'm your person. Take a look at my work to get a glance 
              at what I'm capable of and gauge whether
              we're a good fit for each other and whether
              I meet your competence needs.
            </p>
          </div>
        </div>

        <div className='loose-assets-container'>
            <img src={rod} className='rod' id='loose-item'/>
            <img src={ribbon} className='ribbon' id='loose-item'/>
            <img src={tablet} className='tablet' id='loose-item'/>
            <img src={weirdShape} className='weird-shape' id='loose-item'/>
        </div>
    </div>
  )
}

export default Header