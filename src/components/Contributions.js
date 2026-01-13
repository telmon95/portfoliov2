import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import './Contributions.css';

const Contributions = () => {
  const contributions = [
    {
      title: 'Enhancing ZAP with AI for Bug Bounty Hunting',
      type: 'Blog Post',
      organization: 'OWASP ZAP',
      date: 'November 28, 2025',
      description: 'Contributed to the OWASP ZAP blog discussing how AI can be integrated with ZAP for enhanced bug bounty hunting capabilities.',
      link: 'https://www.zaproxy.org/blog/2025-11-28-enhancing-zap-with-ai-for-bug-bounty-hunting/',
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
    <section id="contributions" className="contributions">
      <motion.div
        className="contributions-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Contributions & Publications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My contributions to the tech community through publications and open-source work
          </p>
        </motion.div>

        <div className="contributions-grid">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              className="contribution-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contribution-icon">
                <FaBook />
              </div>
              <div className="contribution-content">
                <div className="contribution-header">
                  <span className="contribution-type">{contribution.type}</span>
                  {contribution.date && (
                    <span className="contribution-date">{contribution.date}</span>
                  )}
                </div>
                <h3 className="contribution-title">{contribution.title}</h3>
                <p className="contribution-organization">{contribution.organization}</p>
                <p className="contribution-description">{contribution.description}</p>
                {contribution.link && (
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contribution-link"
                  >
                    <FaExternalLinkAlt /> Read Article
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

export default Contributions;
