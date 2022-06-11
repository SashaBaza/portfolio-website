import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import ThemeButton from './ThemeButton'

const Header = ({addToRefs}) => {
  return (
    <header ref={addToRefs} id='home' >
      <section className="container header__container">
        <ThemeButton />
        <h5>Hello I'm</h5>
        <h1>Oleksandr Bazylevych</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My Photo" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>

      </section>
    </header>
  )
}

export default Header