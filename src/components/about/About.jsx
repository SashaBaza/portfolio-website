import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = ({addToRefs}) => {
  return (
    <section ref={addToRefs} id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>~ 1 Year Self-Learning</small>
            </article>

            <article className='about__card'>
              <VscTools className='about-icon'/>
              <h5>Tech Skills</h5>
              <small>HTML, CSS, JavaScript, React, TypeScript, Git, Responsive Web Design</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about-icon'/>
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            Positive, persistent, sociable guy, always striving for more. My dream is to start working in the field of Front-End Development, improve my knowledge and skills, meet professionals in their field, learn something new from them. I really want to be a part of something very powerful that is changing the world, and make every effort to improve it!
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About