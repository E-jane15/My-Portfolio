import React from 'react'
import './services.css'
import { MdOutlineLibraryAddCheck } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
    <div className='myservice'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I build websites that are both beautiful and functional.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm a web developer who loves to create user-friendly experiences.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm passionate about using technology to solve problems.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm a detail-oriented web developer who takes pride in my work.</p>
            </li>
          </ul>
        </article>
        

        <article className='service'>
          <div className='service__head'>
            <h3>Data Aanlysis</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I am able to inspect and evaluate data from given data sources </p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I also assist in designing these data sources necessary for this such as questionnaires </p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I do both qualitative and quantitative analyses</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm always looking for new ways to push the boundaries of data analysis</p>
            </li>
          </ul>
        </article>
      
      </div>
    </section>
  )
}

export default Services