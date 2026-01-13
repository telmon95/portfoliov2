import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Tools of the Trade: Linux and SQL',
      issuer: 'Google',
      date: 'May 2025',
      credentialId: 'TMXAQFEST9P8',
      link: null,
    },
    {
      title: 'Connect and Protect: Networks and Network Security',
      issuer: 'United Latino Students Association',
      date: 'Apr 2025',
      credentialId: 'ATM7CXVTTLYD',
      link: null,
    },
    {
      title: 'Play It Safe: Manage Security Risks',
      issuer: 'United Latino Students Association',
      date: 'Apr 2025',
      credentialId: '37Z4N75VFE12',
      link: null,
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'United Latino Students Association',
      date: 'Mar 2025',
      credentialId: 'TDZWA0OCTWCD',
      link: null,
    },
    {
      title: 'Full-Stack Software Engineering',
      issuer: 'ALX – Holberton School of Software Engineering',
      date: 'Feb 2025',
      credentialId: null,
      link: null,
    },
    {
      title: 'Foundation of Ethical Hacking',
      issuer: 'Udacity',
      date: 'Jan 2025',
      credentialId: 'https://www.udacity.com/certificate/e/0d00c330-b7ba-11ef-9aca-3f4ad272aad1',
      link: 'https://www.udacity.com/certificate/e/0d00c330-b7ba-11ef-9aca-3f4ad272aad1',
    },
    {
      title: 'Bertelsmann Next Generation Tech Booster',
      issuer: 'Bertelsmann',
      date: null,
      credentialId: null,
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certificates" className="certificates">
      <motion.div
        className="certificates-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Licenses & Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Professional certifications and credentials demonstrating my commitment to continuous learning
          </p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="certificate-icon">
                <FaCertificate />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                {cert.date && (
                  <p className="certificate-date">Issued {cert.date}</p>
                )}
                {cert.credentialId && (
                  <p className="certificate-id">Credential ID: {cert.credentialId}</p>
                )}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <FaExternalLinkAlt /> View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
