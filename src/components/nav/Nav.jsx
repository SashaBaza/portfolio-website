import React, {useEffect, useState} from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { TiMessages } from 'react-icons/ti'

const Nav = ({sections}) => {
  const [activeNav, setActiveNav] = useState('#home');
  useEffect(() => {
    const links = document.querySelectorAll('nav a')
    const callback = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && entry.intersectionRatio > 0.5) {
          links.forEach(link => link.classList.remove('active'))
          const activeId = entry.target.id
          const activeLink = document.querySelector(`nav a[href="#${activeId}"]`)
          if(activeLink) {
            activeLink.classList.add('active')
          }
        }
      })
    }
    const sectionObserver = new IntersectionObserver(callback, {
      threshold: 0.7
    })
    sections.forEach(section => sectionObserver.observe(section))
  }, [])
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><TiMessages /></a>
    </nav>
  )
}

export default Nav