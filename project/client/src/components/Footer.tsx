import React from 'react';
import { Clock, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    company: [
      { name: 'Programming Languages', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'AI, ML & Data Science ', href: '#services' },
      { name: 'Database Technologies', href: '#services' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/lomaa-it-solution/', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/lomaa_it?igsh=MWg4dnp0NG5jdjI1cQ%3D%3D&utm_source=qr', name: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
               <span className="brand-name">Lomaa IT solutions</span>
            </div>
            <p className="brand-description">
              Delivering exceptional project management services with a commitment to quality, 
              timeliness, and client satisfaction.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hr@lomaait.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 9160903473</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Ushodaya junction, MVP colony, Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Quick Links</h4>
              <ul className="link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Technologies</h4>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

           </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Lomaa IT solutions. All rights reserved.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.name}
                  onClick={(e) => e.preventDefault()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
