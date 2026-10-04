import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'Angular',
      'React',
      'Preact',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'RxJS',
      'NgRx',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'REST APIs',
      'GraphQL',
      'Entity Framework Core',
      'JWT',
    ],
  },
  {
    title: 'Data',
    skills: [
      'PostgreSQL',
      'SQL',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    title: 'Cloud & Engineering',
    skills: [
      'Azure',
      'AWS',
      'Git',
      'GitHub',
      'CI/CD',
      'Unit Testing',
      'Micro-Frontends',
      'Nx',
    ],
  },
]

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p>TECHNICAL SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills