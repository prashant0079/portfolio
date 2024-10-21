import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.webp'
import IMG2 from '../../assets/img2.webp'
import IMG3 from '../../assets/img3.webp'
import IMG4 from '../../assets/img4.webp'
import IMG5 from '../../assets/img5.webp'
import IMG6 from '../../assets/img6.webp'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Legit ART DAO',
        github: 'https://github.com/prashant0079/legit-art-monorepo',
        demo: 'https://legit-art-dao.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Sovereign Assets(RWA)',
        demo: 'https://sovereign-assets-monorepo.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Rust API boilerplate',
        github: 'https://github.com/prashant0079/rust-api-boilerplate'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Data Inspector',
        github: 'https://github.com/prashant0079/Daltix-Data-Inspector'
    },
    {
        id: 5,
        image: IMG5,
        title: 'REST API hosting RIVM 2016 data',
        github: 'https://github.com/prashant0079/metabolic_assignment'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Pizza Delivery System',
        github: 'https://github.com/prashant0079/pizza-delivery-system'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='text_center1'>
                <h5>My Recent Work</h5>
            </div>
            <div className='text_center'>
                <h2>Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (<article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title}></img>
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                        {github && (
                            <a href={github} target='_blank' className='btn' rel="noopener noreferrer">GitHub</a>
                        )}

                        {demo && (
                            <a href={demo} target='_blank' className='btn btn-primary' rel="noopener noreferrer">Live Demo</a>
                        )}
                        </div>

                    </article>

                    )
                })
                }
            </div>
        </section>
    )
}

export default Portfolio