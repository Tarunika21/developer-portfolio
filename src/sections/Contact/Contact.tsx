import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container contact-container">
        <p className="contact-label">LET'S CONNECT</p>

        <h2>Interested in working together?</h2>

        <p className="contact-description">
          I'm always interested in opportunities to build meaningful products,
          solve challenging engineering problems and work with great teams.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:tarunikavinay@gmail.com"
            className="contact-primary"
          >
            Send Email
          </a>

          <a
            href="https://github.com/Tarunika21"
            target="_blank"
            rel="noreferrer"
            className="contact-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <span>Tarunika V</span>

          <p>
            Built with React + TypeScript
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Contact