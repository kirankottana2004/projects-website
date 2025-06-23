// src/components/WhatYouGet.tsx

import React, { useState } from 'react';
import './WhatYouGet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faBookOpen,
  faDesktop,
  faEye,
  faMapMarkerAlt,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from 'framer-motion';
import RegisterModal from './RegisterModal';  // ← corrected import path

interface Feature {
  icon: typeof faFileCode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: faFileCode,
    title: 'Source Code',
    desc: 'Access complete, well‑documented source code with comments.',
  },
  {
    icon: faBookOpen,
    title: 'Documentation',
    desc: 'Comprehensive docs for setup, usage & advanced features.',
  },
  {
    icon: faDesktop,
    title: 'PPT Presentations',
    desc: 'Professional PPTs explaining architecture & flow.',
  },
  {
    icon: faEye,
    title: 'Live Demo',
    desc: 'Interactive demos showcasing real‑world use cases.',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Step‑by‑Step Guide',
    desc: 'Tutorials guiding you through setup & deployment.',
  },
];

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const WhatYouGet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="whatyouget-section">
        <h2 className="heading">What You Get</h2>
        <p className="subheading">
          Each project comes with comprehensive resources to ensure your success
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
              <button className="view-demo-btn">
                <FontAwesomeIcon icon={faDesktop} style={{ marginRight: '8px' }} />
                View Demo
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA CARD */}
      <section className="cta-section">
        <div className="cta-content container">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of developers who have advanced their careers with our projects
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlay} className="btn-icon" />&nbsp;
              View Demo
            </button>
            <button
              className="btn btn-outline"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* REGISTER MODAL */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WhatYouGet;
