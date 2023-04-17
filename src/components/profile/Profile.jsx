import React from 'react'
import "./style.css"

function Profile() {
  return (
    <section id='profile' className='pd-y f-wth'>
      <div className="container">
        <div className="profile-content">
          <div className="row justify-content-between align-items-start flex-wrap">
            <div className="col col-md-6 col-12">
              <div className="profile-item">
                <h2>Profile</h2>
                <ul>
                  <li><span>name:</span> ultra profile</li>
                  <li><span>birthdate:</span> 24/4/1993</li>
                  <li><span>address:</span> new york</li>
                  <li><span>phone:</span> +212 2458 563 498</li>
                  <li><span>e-mail:</span> ultra_profile@gmail.com</li>
                </ul>
              </div>
            </div>
            {/* ./ profile-item */}
            <div className="col col-md-6 col-12">
              <div className="skills-item">
                <h2>skills</h2>
                <div className="skills-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat eos quibusdam ab a quos eum.</p>
                  <div className="skill">
                    <div className="details">
                      <span>photoshop</span>
                      <span>80%</span>
                    </div>
                    <div className="bar">
                      <div className="ps-bar"></div>
                    </div>
                  </div>
                  {/* ./ skill */}
                  <div className="skill">
                    <div className="details">
                      <span>bootstrap</span>
                      <span>75%</span>
                    </div>
                    <div className="bar">
                      <div className="bootstrap-bar"></div>
                    </div>
                  </div>
                  {/* ./ skill */}
                  <div className="skill">
                    <div className="details">
                      <span>javascript</span>
                      <span>60%</span>
                    </div>
                    <div className="bar">
                      <div className="js-bar"></div>
                    </div>
                  </div>
                  {/* ./ skill */}
                </div>
              </div>
            </div>
            {/* ./ skills-item */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile