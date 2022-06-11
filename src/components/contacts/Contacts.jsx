import React, { useRef } from 'react'
import './contacts.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contacts = ({addToRefs}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6vnurw1', 'template_gpy4svt', form.current, '6rGSxpdbKUXKb-M_6')
    
    e.target.reset();
  };

  return (
    <section ref={addToRefs} id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contacts__container">
        <div className="contacts__options">
          <article className='contacts__option'>
            <MdOutlineMailOutline className='contacts__option-icon'/>
            <h4>E-mail</h4>
            <h5>shurick333@ukr.net</h5>
            <a href="mailto:shurick333@ukr.net" target='_blank'>Send a message</a>
          </article>

          <article className='contacts__option'>
            <FaTelegramPlane className='contacts__option-icon'/>
            <h4>Telegram</h4>
            <h5>Sasha Baza</h5>
            <a href="https://t.me/baza_bos" target='_blank'>Send a message</a>
          </article>

          <article className='contacts__option'>
            <BsLinkedin className='contacts__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Oleksandr Bazylevych</h5>
            <a href="https://www.linkedin.com/in/alexbaz3/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your E-mail' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts