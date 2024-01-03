import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio-1.png'
import IMG2 from '../../assets/Portfolio-2.png'
import IMG3 from '../../assets/Portfolio-3.png'
import IMG4 from '../../assets/Portfolio-4.png'
import IMG5 from '../../assets/Portfolio-5.png'
import IMG6 from '../../assets/Portfolio-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Daily UI Challenge Sign Up Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  },
  {
    id: 2,
    image: IMG2,
    title: 'To Do Mobile App UI',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  },
  {
    id: 3,
    image: IMG3,
    title: 'iWatch Shop Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Breakfast Word Mobile App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Glassmorphic Credit Card Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Furniture Shop UI - Ecommerce',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17209225-Daily-UI-Challenge-001-Sign-Up-Page'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Awesome Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="portfolio item" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target="__blank">Live Demo</a>
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