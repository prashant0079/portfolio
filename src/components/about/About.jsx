import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BiSolidFolderOpen } from 'react-icons/bi'
const About = () => {
    return (
        <section id='about'>
            <div class="text_center1">

                <h5>Get To Know</h5>
            </div>
            <div class="text_center">


                <h2>About Me</h2>
            </div>
            <br></br>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>

                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>5+ Years Working</small>

                        </article>
                        <article className='about__card'>

                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>25+ WorldWide</small>

                        </article>
                        <article className='about__card'>

                            <BiSolidFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>25+ Completed</small>

                        </article>
                    </div>

                    <p>I'm Prashant Tyagi, a software engineer skilled in backend development, blockchain technology, and systems architecture. With experience in Rust, Python, and Solidity, I create efficient, production-quality code. I've worked on projects ranging from carbon footprinting smart contracts, DAOs, RWA Tokenization to microservices for data-driven platforms, blending innovation and scalability.
                    </p>
                    <br></br>
                    <a href='https://calendly.com/nonchalantprashant95/30min' className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About
