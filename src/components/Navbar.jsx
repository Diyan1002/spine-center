import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on link click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="London Spine Unit Logo" className="logo-image" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li
          className={activeLink === "Home" ? "active" : ""}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </li>
        <li className={`dropdown-link ${activeLink === "Our Clinic" ? "active" : ""}`}>
          Our Clinic
          <ul className="dropdown">
            <li
              className={activeLink === "Contact" ? "active" : ""}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact
            </li>
            <li
              className={activeLink === "About Us" ? "active" : ""}
              onClick={() => handleLinkClick("About Us")}
            >
              About Us
            </li>
            <li
              className={activeLink === "Our Staff" ? "active" : ""}
              onClick={() => handleLinkClick("Our Staff")}
            >
              Our Staff
            </li>
          </ul>
        </li>
        <li
          className={activeLink === "Treatments" ? "active" : ""}
          onClick={() => handleLinkClick("Treatments")}
        >
          Treatments
        </li>
        <li
          className={activeLink === "Articles" ? "active" : ""}
          onClick={() => handleLinkClick("Articles")}
        >
          Articles
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
