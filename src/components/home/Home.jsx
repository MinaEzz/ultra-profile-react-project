import React from 'react'
import "./style.css"

function Home() {
  return (
    <section id='home' className='f-wth d-flex align-items-center justify-content-center'>
      <div className="container pd-y">
      <div className="home-content">
        <h1 className='home-title'>ultra profile</h1>
        <h2>creative director</h2>
        <p className='home-desc'>Iam a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile. <br /> Let us work together.</p>
        <button className='btn home-btn'>let's begin</button>
      </div>
      </div>
    </section>
  )
}

export default Home