import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/logo3.png';

function Footer() {
  return (
    <div className='footer'>
        <div>
            <img src={Logo} className='footer-logo'/>
        </div>
        <div>
            <p className='footerHeader'>Company</p>
            <p>Our Company</p>
            <p>Our Coffee</p>
            <p>Our Coffee Stories</p>
            <p>Stories & News</p>
        </div>
        <div>
            <p className='footerHeader'>Services</p>
            <p>Menu</p>
            <p>Coffee Shop</p>
            <p>Reservations</p>
        </div>
        <div>
            <p className='footerHeader'>Contact</p>
            <p>Contact Us</p>
            <p>info@arabicca.com</p>
            <p>011 - 54 12 523</p>
        </div>
    </div>
  )
}

export default Footer