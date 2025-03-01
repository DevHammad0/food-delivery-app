import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { ProductName } from '../../ChangeProductName'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <h3 className='footer-title'>{ProductName}.</h3>
            <p>From juicy burgers and fresh salads to hearty wraps and global-inspired bowls—every dish is crafted in-house with premium ingredients and chef-driven recipes. Fast food, reimagined for every craving.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@{ProductName.toLowerCase()}.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © {ProductName}.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
