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
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' }
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
                <span>hello@intimeprojects.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>New York, NY 10001</span>
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