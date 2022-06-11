import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { MdAddTask } from 'react-icons/md'

const Experience = ({addToRefs}) => {
  return (
    <section ref={addToRefs} id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development (main)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>initial</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__additional">
          <h3>Frontend Development (additional)</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdAddTask className='experience__details-icon' />
              <div>
                <h4>NPM</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdAddTask className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

	    <article className='experience__details'>
              <MdAddTask className='experience__details-icon' />
              <div>
                <h4>JSON</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdAddTask className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>initial</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience