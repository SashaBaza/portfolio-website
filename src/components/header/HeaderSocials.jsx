import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alexbaz3/" target='_blank'><BsLinkedin /></a>
        <a href="https://t.me/baza_bos" target='_blank'><FaTelegramPlane /></a>
        <a href="https://github.com/SashaBaza" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials