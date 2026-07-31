import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Saikiran R Ghali</h2>

      <p>Frontend Developer | MERN Stack Developer</p>

      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;