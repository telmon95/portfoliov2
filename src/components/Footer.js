import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/telmon95', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://za.linkedin.com/in/telmon-maluleka-9a0699146', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/DEOXYRIBOSE404?t=f-Ws3pS0GSoIejzspJxvSg&s=09', label: 'Twitter' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/16hcSDkyX2/', label: 'Facebook' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3 className="footer-name">Telmon Maluleka</h3>
            <p className="footer-tagline">Full-Stack Developer & Tech Enthusiast</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Telmon Maluleka. All rights reserved.
          </p>
          <p className="footer-made-with">
            Built with <span className="heart">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

