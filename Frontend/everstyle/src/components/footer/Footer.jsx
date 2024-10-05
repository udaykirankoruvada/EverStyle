import React from 'react'
import './Footer.css'
import footer_logo from '../assests/Frontend_Assets/logo_big.png';
import instagramIcon from '../assests/Frontend_Assets/instagram_icon.png';
import whatsappIcon from '../assests/Frontend_Assets/whatsapp_icon.png';
import pintesterIcon from '../assests/Frontend_Assets/pintester_icon.png';


export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>EverStyle</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintesterIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2024 - All Rights Reserved. udaykiran</p>
      </div>
    </div>
  )
}

