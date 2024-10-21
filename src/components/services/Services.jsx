import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'
const Services = () => {
    return (
        <section id='services'>
            <div className='text_center1'>
                <h5>What I offer</h5>
            </div>
            <div className='text_center'>
                <h2>Services</h2>
            </div>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Blockchain Services</h3>
                    </div>
                    <ul className='service_list'>
                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Development and deployment of smart contracts on Ethereum and Polygon using Solidity.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Building decentralized applications (DApps), including DAO governance, crowdfunding, and NFT platforms.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Blockchain integration for secure, tamper-proof transactions.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Optimization of gas costs for smart contracts, reducing transaction and deployment expenses.
                            </p>
                        </li>
                    </ul>
                </article>
                {/*end of Blockchain Services*/}

                <article className="service">
                    <div className="service__head">
                        <h3>Backend Services</h3>
                    </div>
                    <ul className='service_list'>
                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Scalable backend development using Python, Rust, and TypeScript, focusing on microservices and REST APIs.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                System architecture design, including distributed systems for reliability and scalability.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Full-stack development with Django, FastAPI, and frontend technologies like Vue.js.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                DevOps services: Docker, Kubernetes, CI/CD, AWS, GCP.
                            </p>
                        </li>
                    </ul>
                </article>
                {/*end of Backend Services*/}

                <article className="service">
                    <div className="service__head">
                        <h3>Machine Learning Services</h3>
                    </div>
                    <ul className='service_list'>
                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Development and deployment of machine learning models using TensorFlow, PyTorch, and Keras.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Integration of machine learning solutions into production systems.
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Expertise in computer vision and image recognition projects.(YOLO, Faster-RCNN)
                            </p>
                        </li>

                        <li><BsCheck className='service__list-icon' />
                            <p>
                                Deployment using Docker and Kubernetes for scalability and efficiency.
                            </p>
                        </li>
                    </ul>
                </article>
                {/*end of Machine Learning Services*/}
            </div>

        </section>
    )
}

export default Services