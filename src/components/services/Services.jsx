import React, { useState } from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'


const Services = () => {
  const [isOpenFirstWindow, setIsOpenFirstWindow] = useState(false);
  const [isOpenSecondWindow, setIsOpenSecondWindow] = useState(false);

  const toggleFirstWindow = () => {
    setIsOpenFirstWindow(!isOpenFirstWindow);
  }
  const toggleSecondWindow = () => {
    setIsOpenSecondWindow(!isOpenSecondWindow);
  }

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={toggleFirstWindow} className='list'>
          <motion.h3 layout='position' className='tech'>Web Development</motion.h3>
          {isOpenFirstWindow && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className='expand'>
              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>1+ year of self-studing</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Strong knowledge of JavaScript (ES5, ES6+), HTML5, CSS3</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Experience with React</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Good understanding TypeScript</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Knowing JQuery, Bootstrap, Material UI</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Intermediate level of English</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Responsive Design</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Version Control</p>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={toggleSecondWindow} className='list'>
          <motion.h3 layout='position' className='skill'>Soft Skills</motion.h3>
          {isOpenSecondWindow && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className='expand'>
              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Positive</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Communicable</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Сreative</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Self-improvement</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Problem-solving</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Young and Beautiful &#128540;</p>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Services