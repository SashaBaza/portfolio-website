import React from 'react'
import './footer.css'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Baza</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/baza_bos" target='_blank'><FaTelegramPlane /></a>
        <a href="https://www.linkedin.com/in/alexbaz3/" target='_blank'><BsLinkedin /></a>
        <a href="mailto:shurick333@ukr.net" target='_blank'><MdOutlineMarkEmailRead /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Oleksandr Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer