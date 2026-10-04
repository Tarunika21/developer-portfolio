import './About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building software that solves real problems.</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I'm a Full Stack Software Engineer experienced in building and
              maintaining production web applications using .NET, Angular,
              React and PostgreSQL.
            </p>

            <p>
              I work across frontend and backend development, from creating
              responsive user interfaces and reusable components to designing
              APIs, working with databases and improving application
              reliability.
            </p>

            <p>
              I enjoy working on scalable systems, clean architecture and
              continuously improving the quality of the products I build.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <strong>Full Stack</strong>
              <span>Frontend + Backend</span>
            </div>

            <div className="highlight-card">
              <strong>100K+</strong>
              <span>Application Users</span>
            </div>

            <div className="highlight-card">
              <strong>90%+</strong>
              <span>Unit Test Coverage</span>
            </div>

            <div className="highlight-card">
              <strong>Cloud</strong>
              <span>Azure + AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About