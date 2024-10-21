import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <div className='text_center1'>
                <h5>What Skills I Have</h5>

            </div>

            <div className='text_center'>

                <h2>My Experience</h2>
            </div>
            <br></br>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Blockchain Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div> 
                            <h4>Solidity</h4>
                            <small className='text-light'>Experienced</small>
                        </div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Ethereum</h4>
                            <small className='text-light'>Experienced</small>
                        </div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Polygon</h4>
                            <small className='text-light'>Experienced</small>
                        </div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Web3.js/Web3.py</h4>
                            <small className='text-light'>Experienced</small>
                        </div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Decentralized Oracles (Chainlink)</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Smart Contract Optimization</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Hyperledger Fabric</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>Foundry</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </div>

                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div> <h4>Python</h4>
                        <small className='text-light'>Experienced</small></div>

                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div><h4>Rust</h4>
                        <small className='text-light'>Intermediate</small></div>

                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div><h4>Node.js</h4>
                        <small className='text-light'>Experienced</small></div>

                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div><h4>FastAPI</h4>
                        <small className='text-light'>Experienced</small></div>

                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div><h4>Django</h4>
                        <small className='text-light'>Experienced</small></div>

                    <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon' />
                    </article>
                    <div>
                        <h4>SQL (PostgreSQL)</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </div>

                </div>
            </div>

        </section>
    )
}

export default Experience