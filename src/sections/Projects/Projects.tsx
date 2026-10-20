import "./Projects.css";

const professionalProjects = [
  {
    title: "Advanced Events Search",
    description:
      "High-performance enterprise financial events search application supporting 100K+ users across desktop and mobile platforms.",
    achievements: [
      "Delivered approximately 20 production features",
      "Resolved 100+ production issues through root-cause analysis and end-to-end validation",
      "Integrated GraphQL APIs with NgRx and RxJS state management",
      "Maintained 90%+ unit-test coverage for developed features",
    ],
    technologies: ["Angular", "TypeScript", "NgRx", "RxJS", "GraphQL"],
  },
  {
    title: "Private Markets Analytics Platform",
    description:
      "Enterprise financial analytics platform built using micro frontend architecture with full-stack ownership across UI, APIs and integrations.",
    achievements: [
      "Developed 5 micro frontend financial analytics widgets",
      "Built 5+ ASP.NET Core backend/API components",
      "Integrated GraphQL workflows between frontend and backend services",
      "Built reusable UI modules using an enterprise design system",
    ],
    technologies: ["Preact", "ASP.NET Core", "GraphQL", "Micro Frontends"],
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>Products and systems I've worked on.</h2>
        </div>

        <div className="project-category">
          <div className="category-heading">
            <span>PROFESSIONAL WORK</span>
            <p>Selected enterprise projects</p>
          </div>

          <div className="professional-projects-grid">
            {professionalProjects.map((project) => (
              <article
                className="professional-project-card"
                key={project.title}
              >
                <div className="professional-project-top">
                  <span>Enterprise Project</span>
                  <span>LSEG</span>
                </div>

                <h3>{project.title}</h3>

                <p className="professional-description">
                  {project.description}
                </p>

                <ul>
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="project-category personal-project-category">
          <div className="category-heading">
            <span>PERSONAL PROJECTS</span>
            <p>Independent full-stack engineering projects</p>
          </div>

          <article className="featured-project">
            <div className="project-content">
              <div className="project-label">
                <span>FEATURED PROJECT</span>
                <span className="project-status">Live on AWS</span>
              </div>

              <h3>AI Career Hub</h3>

              <p className="project-description">
                A deployed full-stack career management platform that helps
                users manage career profiles, build resumes, organize
                professional experience and education, and track job
                applications through a unified dashboard.
              </p>

              <ul className="project-features-list">
                <li>
                  JWT-based authentication with protected application routes
                </li>
                <li>
                  Career profile and resume management with experience,
                  education and project records
                </li>
                <li>
                  Job application tracking with status-based dashboard
                  statistics
                </li>
                <li>
                  AWS deployment using CloudFront, S3, Elastic Beanstalk and RDS
                  PostgreSQL
                </li>
              </ul>

              <div className="project-tech">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>ASP.NET Core</span>
                <span>.NET 10</span>
                <span>PostgreSQL</span>
                <span>EF Core</span>
                <span>JWT</span>
                <span>AWS</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://d3amqdncleql58.cloudfront.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/Tarunika21/AICareerHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  GitHub ↗
                </a>
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

                  <div className="browser-address">AI Career Hub</div>
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

          <article className="professional-project-card impactgraph-card">
            <div className="professional-project-top">
              <span>Open Source Project</span>
              <span>Go + Java</span>
            </div>

            <h3>ImpactGraph</h3>

            <p className="professional-description">
              A developer-focused project exploring API dependency analysis and
              change-impact tracking across services. Built to strengthen
              backend engineering, system design and cross-language development
              skills.
            </p>

            <ul>
              <li>
                Developing a Go-based API service with structured backend
                architecture
              </li>
              <li>
                Implementing PostgreSQL-backed persistence and repository
                patterns
              </li>
              <li>
                Exploring API reference resolution and dependency analysis
              </li>
              <li>
                Planned integration with a Spring Boot analyzer, Docker and
                cloud deployment
              </li>
            </ul>

            <div className="project-tech">
              <span>Go</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
              <span>Spring Boot (Planned)</span>
              <span>Docker (Planned)</span>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Tarunika21/ImpactGraph"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
