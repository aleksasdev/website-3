import React from 'react'
import './index.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src={logo} className='logo'/>
        <p>Home</p>
        <p>Work</p>
        <p>Contact</p>
    </div>
  )
}

export default Navbar