import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer id="footer-section" className="footer-section">
      <div className="contact-info">
        <p>Email: clickit3214@gmail.com</p>
        <p>Phone: +91 9121605410</p>
      </div>
      <div className="social-media">
        <p>Follow us on Social Media</p>
        <ul>
          <li><a href="https://ubkyportfolio.netlify.app/">Website</a></li>
          <li><a href="https://www.linkedin.com/in/balakrishnau">LinkedIn</a></li>
        </ul>
      </div>
      <p>© 2024 ClickIt - All Right Reserved</p>
    </footer>
  );
};

export default FooterSection;
