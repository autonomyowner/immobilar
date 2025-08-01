import React from 'react';
import { ArrowRight, Home, Users, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <div className="hero-video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/pics/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Luxury Real Estate
            <span className="hero-subtitle">Advisors</span>
          </h1>
          <p className="hero-description">
            Who Give You Access to the World's Most Desirable Homes
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              View Properties
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <Home size={24} />
            </div>
            <div className="stat-number">0</div>
            <div className="stat-label">Properties Sold</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <div className="stat-number">0</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-number">0</div>
            <div className="stat-label">Years Experience</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Globe size={24} />
            </div>
            <div className="stat-number">0</div>
            <div className="stat-label">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 