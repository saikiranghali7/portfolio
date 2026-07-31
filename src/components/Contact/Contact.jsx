import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>your-sklaptop903@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 XXXXXXXXXX</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/yourprofile</p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>github.com/yourusername</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;