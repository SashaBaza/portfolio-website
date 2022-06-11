import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './portfolio.css'
import IMG1 from '../../assets/Calculator.png'
import IMG2 from '../../assets/Slider.png'
import IMG3 from '../../assets/Quiz.png'
import IMG4 from '../../assets/i3.webp'
import IMG5 from '../../assets/i4.webp'
import IMG6 from '../../assets/i5.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    language: 'javascript',
    title: 'Calculator JS',
    github: "https://github.com/SashaBaza/calculator-pro",
  },
  { 
    id: 2,
    image: IMG2,
    language: 'javascript',
    title: 'First Slider JS',
    github: "https://github.com/SashaBaza/first-slider-js",
  },
  {
    id: 3,
    image: IMG3,
    language: 'javascript',
    title: 'Quiz JS',
    github: "https://github.com/SashaBaza/quiz-js",
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  }, 
  {
    id: 6,
    language: 'javascript',
    image: IMG6,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  },
  {
    id: 7,
    language: 'react',
    image: IMG1,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  }, 
  {
    id: 8,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  },
  {
    id: 9,
    language: 'javascript',
    image: IMG4,
    title: 'This is a portfolio item title',
    github: "https://github.com",
  }
] 

const Portfolio = ({addToRefs}) => {
  const [project, setProject] = useState('all');
  const [filteredPortfolio, setfilteredPortfolio] = useState([])
  const lastFlip = useRef([])
  const flipped = []
  const addToLastFlip = (el) => {
    if(el && !lastFlip.current.includes(el)) {
      flipped.push(el)

      el.addEventListener('click', () => {
        if(el.classList.contains('is-flipped')) {
          el.classList.remove('is-flipped')
        } else {
          el.classList.add('is-flipped')
        }
      })
    }
  }
  
  useEffect(() => {
    filterHandler();
  }, [project])
  
  const projectHandler = e => {
    setProject(e.target.id)
  }
  
  const filterHandler = () => {
    switch (project) {
      case 'javascript': 
      setfilteredPortfolio(data.filter(project => project.language === 'javascript'))      
      break;
      case 'react':
        setfilteredPortfolio(data.filter(project => project.language === 'react'))
        break;
        default:
          setfilteredPortfolio(data)
          break;
    }
  }

  return (
    <section>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div ref={addToRefs} id='portfolio' className='container filter__container'>
        <button id='all' className={project === 'all' ? 'active' : ''} onClick={projectHandler}>All</button>
        <button id='javascript' className={project === 'javascript' ? 'active' : ''} onClick={projectHandler}>JavaScript</button>
        <button id='react' className={project === 'react' ? 'active' : ''} onClick={projectHandler}>React JS</button>
      </div>

      <div className="container portfolio__container">
        {
          filteredPortfolio.map(({id, image, title, github}) => {
            return(
              <AnimatePresence key={id} exitBeforeEnter>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }} key={id} className='card' >
                  <div id={id} ref={addToLastFlip} className='card__inner is-flipped'>
                    <div className="card__face card__face-front">
                      <div className="card__content">
                        <div className="card__header">
                          <img src={image} alt={title} className='image'/>
                          <h2>{title}</h2>
                        </div>
                        <div className="card__body">
                          <h3>Title</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, laboriosam.</p>
                          <a href={github} className='btn' target='_blank'>Github</a>
                        </div>
                      </div>
                    </div>
                    <div className="card__face card__face-back">
                      <img src={image} alt=''/>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio