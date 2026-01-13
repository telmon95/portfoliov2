import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that follows best practices.',
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Building fast, efficient applications optimized for speed and user experience.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Staying updated with latest technologies and implementing creative solutions.',
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I am a <strong>Full-Stack Software Engineer</strong> with strong experience in designing, 
              developing, and deploying scalable web applications and APIs. I specialize in building 
              innovative digital solutions that deliver exceptional user experiences.
            </p>
            <p>
              My expertise spans across multiple programming languages including <strong>C</strong>, 
              <strong> Python</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, 
              <strong> HTML</strong>, and <strong>CSS</strong>. I work extensively with modern 
              frameworks like <strong>React</strong>, <strong>Node.js</strong>, <strong>Django</strong>, 
              and <strong>Flask</strong>, and have hands-on experience with databases including 
              <strong> MySQL</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>. 
              I also have experience with cloud platforms such as <strong>AWS</strong>.
            </p>
            <p>
              I demonstrate a strong security mindset with foundational knowledge of ethical hacking, 
              web security, and secure authentication mechanisms. Known for analytical problem-solving, 
              adaptability, and delivering reliable solutions in high-pressure environments. What drives 
              me is the opportunity to solve complex problems, learn new technologies, and contribute 
              to projects that make a real impact.
            </p>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

