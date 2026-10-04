import './Certifications.css'

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    code: 'Generative AI',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS',
    code: 'Cloud',
  },
]

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="section-container">
        <div className="section-heading">
          <p>CERTIFICATIONS</p>
          <h2>Continuous learning.</h2>
        </div>

        <div className="certification-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.title}
            >
              <div className="certification-code">
                {certification.code}
              </div>

              <h3>{certification.title}</h3>
              <p>{certification.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications