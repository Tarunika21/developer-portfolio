import './Projects.css'

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>Things I've built.</h2>
        </div>

        <article className="featured-project">
          <div className="project-content">
            <div className="project-label">
              <span>FEATURED PROJECT</span>
              <span className="project-status">In Development</span>
            </div>

            <h3>AI Career Hub</h3>

            <p className="project-description">
              A full-stack career management platform designed to help users
              manage career profiles, resumes, experience, education and job
              application workflows through a modern web interface.
            </p>

            <div className="project-features">
              <div>
                <span>01</span>
                <p>Secure JWT-based authentication and authorization</p>
              </div>

              <div>
                <span>02</span>
                <p>Resume and career profile management</p>
              </div>

              <div>
                <span>03</span>
                <p>REST API architecture with PostgreSQL persistence</p>
              </div>

              <div>
                <span>04</span>
                <p>Production-focused testing and cloud deployment</p>
              </div>
            </div>

            <div className="project-tech">
              <span>Angular</span>
              <span>ASP.NET Core</span>
              <span>PostgreSQL</span>
              <span>EF Core</span>
              <span>JWT</span>
              <span>AWS</span>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Tarunika21"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>

              <span className="deployment-note">
                Live demo coming soon
              </span>
            </div>
          </div>

          <div className="project-preview">
            <div className="browser-window">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-address">
                  AI Career Hub
                </div>
              </div>

              <div className="preview-content">
                <div className="preview-sidebar">
                  <strong>AI</strong>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-main">
                  <p>CAREER DASHBOARD</p>
                  <h4>Welcome back.</h4>

                  <div className="preview-cards">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <div className="preview-panel"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects