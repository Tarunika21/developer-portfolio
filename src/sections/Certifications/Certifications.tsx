import './Certifications.css'

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    credentialUrl:
      'https://learn.microsoft.com/en-gb/users/tarunikav-4474/credentials/ee2a370dccd97be9',
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    code: 'Generative AI',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/M0WQ79HUSOXK',
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

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="credential-link"
                aria-label={`View ${certification.title} credential`}
              >
                View Credential →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications