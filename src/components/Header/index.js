import React from 'react'
import './index.css'
import noise from '../../assets/noise.png'
import ribbon from '../../assets/ribbon.png'
import tablet from '../../assets/tablet.png' 
import rod from '../../assets/rod.png' 
import weirdShape from '../../assets/weird-shape.png' 
import titleGraphic from '../../assets/title-graphic.png' 

const Header = () => {
  return (
    <div className='header-container'>
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