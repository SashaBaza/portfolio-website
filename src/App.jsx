import React, {useRef} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  const sectionsRef = useRef([])
  sectionsRef.current = []
  const addToRefs = el => {
    if(el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }
  
  return (
    <>
      <Header addToRefs={addToRefs}/>
      <Nav sections={sectionsRef.current}/>
      <About addToRefs={addToRefs}/>
      <Experience addToRefs={addToRefs}/>
      <Services />
      <Portfolio addToRefs={addToRefs}/>
      <Testimonials />
      <Contacts addToRefs={addToRefs}/>
      <Footer />
    </>
  )
}

export default App
