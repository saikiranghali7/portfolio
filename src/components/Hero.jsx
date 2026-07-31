import "./Hero.css";
import profile from "../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h4>Hello, I'm</h4>

        <h1>Saikiran R Ghali</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "MERN Stack Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Passionate MCA student who loves creating modern web applications.
        </p>

        <div className="hero-buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a href="/resume/saikiranCV.pdf" download>
          <button>Download Resume</button>
        </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/saikiranghali7" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/saikiran-r-ghali-5617b7368/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:saikiranghali7@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Saikiran" />
      </div>
    </section>
  );
}

export default Hero;