import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            👋 Hello, I'm
          </motion.div>
          
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Telmon Maluleka
          </motion.h1>
          
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Full-Stack Software Developer
            <span className="title-highlight"> & Tech Enthusiast</span>
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I build scalable web applications and create exceptional digital experiences
            using modern technologies. Passionate about clean code, user experience, and
            continuous learning.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Open resume in new tab for viewing/printing/downloading
                window.open('/resume.html', '_blank', 'noopener,noreferrer');
              }}
            >
              <FaDownload /> Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="hero-avatar">
            <div className="avatar-glow"></div>
            <div className="avatar-content">
              <img 
                src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/profile-photo.jpg` : '/profile-photo.jpg'}
                alt="Telmon Maluleka" 
                className="avatar-image"
                onError={(e) => {
                  // Fallback to initials if image not found
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <span className="avatar-fallback" style={{ display: 'none' }}>TM</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;

