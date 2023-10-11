import React from 'react';
import LogoImg from '../assets/logo.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const handleDownloadResume = () => {
    const resumePath = '/Nurellezia_resume.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={LogoImg} className="logo-img" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#certification">Certification</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={handleDownloadResume} className="navbar-button">
          Resume
        </button>
      </nav>
    </header>
  );
}
