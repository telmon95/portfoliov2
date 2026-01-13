import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiDjango, 
  SiFlask, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiExpress, 
  SiD3Dotjs, 
  SiThreedotjs, 
  SiAmazonaws, 
  SiDocker
} from 'react-icons/si';
import './Skills.css';

// Custom C icon component
const CIcon = () => (
  <span style={{ 
    fontSize: '2.5rem', 
    fontWeight: 'bold', 
    color: 'var(--primary-color)',
    fontFamily: 'monospace'
  }}>C</span>
);

// Custom Bash icon component
const BashIcon = () => (
  <span style={{ 
    fontSize: '2.5rem', 
    fontWeight: 'bold', 
    color: 'var(--primary-color)',
    fontFamily: 'monospace'
  }}>$</span>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: <CIcon />, level: 85 },
        { name: 'Bash', icon: <BashIcon />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'SQL', icon: <FaDatabase />, level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'Express', icon: <SiExpress />, level: 85 },
        { name: 'Django', icon: <SiDjango />, level: 85 },
        { name: 'Flask', icon: <SiFlask />, level: 80 },
        { name: 'D3.js', icon: <SiD3Dotjs />, level: 80 },
        { name: 'Three.js', icon: <SiThreedotjs />, level: 75 },
      ],
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'Redis', icon: <SiRedis />, level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'AWS', icon: <SiAmazonaws />, level: 75 },
        { name: 'Docker', icon: <SiDocker />, level: 70 },
        { name: 'Cloudinary', icon: <FaCode />, level: 75 },
      ],
    },
    {
      title: 'APIs & Security',
      skills: [
        { name: 'REST APIs', icon: <FaCode />, level: 85 },
        { name: 'JWT Authentication', icon: <FaCode />, level: 80 },
        { name: 'OpenAI API', icon: <FaCode />, level: 80 },
        { name: 'Web Security', icon: <FaCode />, level: 75 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

