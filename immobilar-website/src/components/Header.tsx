import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+213 557 30 40 04</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>contact@immobilar.com</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-link">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={16} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={16} />
            </a>
          </div>
        </div>
        
        <div className="header-main">
          <div className="logo">
            <img src="/pics/logo.jpg" alt="Immobilar Logo" className="logo-image" />
            <h1>Immobilar</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 