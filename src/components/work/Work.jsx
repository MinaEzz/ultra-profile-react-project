import React from 'react'
import "./style.css"
// material icons
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';

function Work() {
  return (
    <section id='work' className='pd-y f-wth'>
      <div className="container">
        <div className="section-header">
          <h2>my services</h2>
        </div>
        <div className="work-content mg-t">
        <div className="row justify-content-around align-items-center flex-wrap">
          <div className="col col-lg-4 col-md-6 col-12">
            <div className="work-card">
              <div className="card-icon">
              <DesignServicesIcon/>
              </div>
              <h3 className='card-title'>ui/ux</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aliquam non laboriosam perspiciatis fugiat reiciendis fuga? Nobis voluptatem iusto ab voluptatibus nemo ex.</p>
            </div>
          </div>
          {/* ./work-card */}
          <div className="col col-lg-4 col-md-6 col-12">
            <div className="work-card">
              <div className="card-icon">
              <CodeIcon/>
              </div>
              <h3 className='card-title'>development</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aliquam non laboriosam perspiciatis fugiat reiciendis fuga? Nobis voluptatem iusto ab voluptatibus nemo ex.</p>
            </div>
          </div>
          {/* ./work-card */}
          <div className="col col-lg-4 col-md-6 col-12">
            <div className="work-card">
              <div className="card-icon">
              <EngineeringIcon/>
              </div>
              <h3 className='card-title'>maintain</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aliquam non laboriosam perspiciatis fugiat reiciendis fuga? Nobis voluptatem iusto ab voluptatibus nemo ex.</p>
            </div>
          </div>
          {/* ./work-card */}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Work