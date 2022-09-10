import React from 'react'
import CV from '../../assets/Bazylevych_Oleksandr_Front-End-Developer_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA