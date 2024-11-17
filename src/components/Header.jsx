// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="contact-info">
        <span> 0203 973 8810</span>
        {/* <span>📧 info@spineclinic.com</span> */}
      </div>
      <button className="appointment-button">Book Appointment</button>
    </div>
  );
};

export default Header;
