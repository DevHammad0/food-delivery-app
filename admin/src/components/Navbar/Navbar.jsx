import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { ProductName } from '../../ProductName'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img className='logo' src={assets.logo} alt="" /> */}
      <h2 className='title'>{ProductName}.</h2>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
