import React from 'react';
import { CheckCircle, Users, Award } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Delivering Projects
              <span className="highlight"> On Time</span>,<br />
              Every Time
            </h1>

            <p className="hero-subtitle fade-in">
              Professional project management services that ensure your vision becomes reality. 
              We specialize in delivering high-quality projects within timeline and budget constraints.
            </p>

            <div className="hero-features fade-in">
              <div className="feature-item">
                <CheckCircle className="feature-icon" size={20} />
                <span>100% On-Time Delivery</span>
              </div>
              <div className="feature-item">
                <Users className="feature-icon" size={20} />
                <span>Expert Team</span>
              </div>
              <div className="feature-item">
                <Award className="feature-icon" size={20} />
                <span>Quality Assured</span>
              </div>
            </div>

            <div className="hero-actions fade-in">
              <button className="btn btn-primar hero-btn" onClick={onRegisterClick}>
                Get Started Today →
              </button>
              <a href="#services" className="btn btn-secondar">
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
