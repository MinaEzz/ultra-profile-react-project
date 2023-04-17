import React from 'react'
import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function SocialMedia() {
  return (
    <section id='social-media' className='f-wth'>
      <div className="container-fluied">
        <div className="social-content">
          <div className="row align-items-center justify-content-center flex-wrap">
            <div className="col col-lg-4 col-12">
              <div className="social-item facebook">
                <div className="social-icon">
                  <FacebookIcon />
                </div>
                <div className="social-desc">
                  <h3>follow me on</h3>
                  <span>social facebook</span>
                </div>
              </div>
            </div>
            {/* ./ social-item */}
            <div className="col col-lg-4 col-12">
              <div className="social-item twitter">
              <div className="social-icon">
                  <TwitterIcon />
                </div>
                <div className="social-desc">
                  <h3>tweet me on</h3>
                  <span>social twitter</span>
                </div>
              </div>
            </div>
            {/* ./ social-item */}
            <div className="col col-lg-4 col-12">
              <div className="social-item pinterest">
              <div className="social-icon">
                  <PinterestIcon />
                </div>
                <div className="social-desc">
                  <h3>pin me on</h3>
                  <span>social pinterest</span>
                </div>
              </div>
            </div>
            {/* ./ social-item */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia