import React from 'react'
import "./style.css"
// data
import data from "../../data/portfolio.json"

function Portfolio() {
  const portfolioItem = data.map((portfolioItem)=>{
    return (
      <div className="col col-lg-3 col-md-6 col-12" key={portfolioItem.id}>
      <figure className="portfolio-item hover-img">
        <img src={portfolioItem.image} alt="portfolio item" />
        <figcaption>
          <button className='project-btn btn btn-default'> view </button>
        </figcaption>
      </figure>
    </div>
    )
  })

  return (
    <section id='portfolio' className='pd-y f-wth'>
      <div className="container">
        <div className="section-header">
          <h2>portfolio</h2>
        </div>
        <div className="portfolio-content mg-t">
          <div className="row justify-content-around align-items-center flex-wrap">
            {portfolioItem}
            {/* ./portfolio-item */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio