import React from 'react'

function Contact() {
  return (
    <div>
      <h1>contact</h1>

      <header>
        <h3 className="text-lighter">Reliable, efficient delivery</h3>
        <h3 className="text-bold">Powered by Technology</h3>
        <p className="text-muted">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>

      <main className='mainsection '>
        <div className="section">
          <div className="card card-supervisor">
            <div className="card-body">
              <div className="card-title text-bold">Supervisor</div>
              <div className="card-text text-muted">Monitors activity to identify project roadblocks</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-supervisor.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card card-team_builder">
            <div className="card-body">
              <div className="card-title text-bold">Team Builder</div>
              <div className="card-text text-muted">Scans our talent network to create the optimal team for your project</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-team-builder.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card card-karma">
            <div className="card-body">
              <div className="card-title text-bold">Karma</div>
              <div className="card-text text-muted">Regularly evaluates our talent to ensure quality</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-karma.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="card card-calculator">
            <div className="card-body">
              <div className="card-title text-bold">Calculator</div>
              <div className="card-text text-muted">Uses data from past projects to provide better delivery estimates</div>
            </div>
            <div className="card-footer">
              <div className="card-img">
                <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-calculator.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
