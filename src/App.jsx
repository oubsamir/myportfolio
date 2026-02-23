import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>SAMIR OUBRAIM</h1>
        <nav>
          <a href="#home" className="action">HOME</a>
          <a href="#service">SERVICE</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
          <a href="#certification">CERTIFICATION</a>
        </nav>
      </header>

      {/* HOME Section */}
      <section id="home" className="home">
        <div className="home-img">
          <img src="/600 copy.jpg" alt="Samir Profile" />
        </div>

        <div className="home-content">
          <h1>
            Hi, I’m <span>SAMIR</span>
          </h1>

          <h3 className="typing-text">
            I’m a <span>Full Stack Developer</span>
          </h3>

          <p>
            I am Samir, a Full Stack Web Developer specializing in building
            and developing applications and websites. I have experience working
            with modern technologies for both frontend and backend development.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE Section */}
      <section id="service">
        <h2>My Services</h2>

        <div className="service-content">
          <div className="service-box">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>
              Creating dynamic, responsive websites using HTML, CSS,
              JavaScript, and modern frameworks.
            </p>
          </div>

          <div className="service-box">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>
              Designing intuitive interfaces that enhance user experience.
            </p>
          </div>

          <div className="service-box">
            <i className="fas fa-server"></i>
            <h3>Backend Development</h3>
            <p>
              Developing secure and scalable backend services using Node.js.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS Section */}
      <section id="skills">
        <h2>My Skills</h2>

        <div className="skills-content">
          <div className="skill">
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, React.js, Bootstrap</p>
          </div>

          <div className="skill">
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB, SQL</p>
          </div>

          <div className="skill">
            <h3>Tools & Technologies</h3>
            <p>Git, GitHub, Docker, REST APIs, Agile</p>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section id="contact">
        <h2>Contact Me</h2>

        <p>Feel free to get in touch with me.</p>

        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> Email: samir@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: +123 456 7890
          </p>
        </div>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* CERTIFICATION Section */}
      <section id="certification">
        <h2>Certifications</h2>

        <div className="certification-content">
          <div className="certificate">
            <h3>Full Stack Web Development</h3>
            <p>Issued by Code Academy</p>
          </div>

          <div className="certificate">
            <h3>Advanced JavaScript</h3>
            <p>Issued by Udacity</p>
          </div>

          <div className="certificate">
            <h3>UI/UX Design</h3>
            <p>Issued by Coursera</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;