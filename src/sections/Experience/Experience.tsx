import './Experience.css'

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>Engineering production applications at scale.</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Software Engineer</h3>
              <h4>London Stock Exchange Group (LSEG)</h4>
            </div>

            <span className="experience-status">Current</span>
          </div>

          <div className="experience-body">
            <p>
              Building and maintaining full-stack applications used by a large
              production user base, working across frontend, backend, APIs and
              database layers.
            </p>

            <ul>
              <li>
                Develop responsive applications and micro-frontends using
                Angular, React/Preact and TypeScript.
              </li>

              <li>
                Build and maintain ASP.NET Core APIs and integrate services
                through GraphQL.
              </li>

              <li>
                Work with PostgreSQL and optimize database access for
                performance and reliability.
              </li>

              <li>
                Maintain strong automated test coverage and contribute to code
                reviews, defect resolution and production releases.
              </li>
            </ul>

            <div className="experience-stack">
              <span>.NET</span>
              <span>Angular</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>GraphQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience