import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Awesome Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Title</h3>
          <a href="https://github.com">Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio