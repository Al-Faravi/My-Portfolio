import React from 'react'
import './Footer.css'
import logo from '../../assets/faravi_logo.JPG';
import usericon from '../../assets/profile.png'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat
            commodi praesentium possimus. Earum ratione nisi veritatis sed temporibus
            cupiditate!</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={usericon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, illo?</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
