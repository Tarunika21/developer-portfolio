import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">HELLO, I'M</p>

          <h1>Tarunika V</h1>

          <h2>Full Stack Software Engineer</h2>

          <p className="hero-description">
            I build scalable, reliable web applications using .NET, Angular,
            React and modern cloud technologies, with a focus on clean
            architecture and great user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a
              href="/resume/Tarunika_V_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Resume
            </a>

            <a
              href="https://github.com/Tarunika21"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>

          <div className="hero-tech">
            <span>.NET</span>
            <span>Angular</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">'Tarunika V'</span>,
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-green">
                  'Full Stack Software Engineer'
                </span>
                ,
              </p>

              <p className="code-indent">
                builds: <span className="code-green">'Scalable Products'</span>,
              </p>

              <p>{"}"}</p>
            </div>
          </div>

          <div className="floating-tag tag-one">React</div>
          <div className="floating-tag tag-two">.NET</div>
          <div className="floating-tag tag-three">Angular</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
