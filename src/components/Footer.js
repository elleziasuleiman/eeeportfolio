import React from "react";
import '../styles/Footer.css';
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-section footer-top">
      <div className="footer-icon-section">
        <div className="icon">
          <FaLinkedin size={48} style={{color: "#d39b04",}} />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/nurellezia-suleiman-a93a29209/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
        <div className="icon">
          <FaPhone size={48} style={{color: "#d39b04",}} />
          <h3>Contact Number</h3>
          <p>018-3733500</p>
        </div>
        <div className="icon">
          <FaEnvelope size={48} style={{color: "#d39b04",}} />
          <h3>Email</h3>
          <p>
            <a href="mailto:nurellezia2000@gmail.com">nurellezia2000@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="copyright-section">
        <p style={{fontWeight: "bold"}}>@2023 | Copyrights: Nurellezia binti Suleiman</p>
      </div>
    </div>
  );
}

export default Footer;
