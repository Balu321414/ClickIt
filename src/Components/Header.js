import React, { useState } from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">Click It</a>
      </div>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#first-section">Home</a>
          </li>
          <li>
            <a href="#services-section">Services</a>
          </li>
          <li>
            <a href="#why-choose-us-section">Why Choose Us</a>
          </li>
          <li>
            <a href="#testimonial-section">Testimonials</a>
          </li>
          <li>
            <a href="#footer-section">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
