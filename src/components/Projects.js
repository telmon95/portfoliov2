import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Nearby Cheaper Houses Finder',
      description: 'A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) to find houses in the vicinity of a selected area that are priced lower than the median price within that selected area.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: 'https://drive.google.com/file/d/1Nary0KqHtoDs4mDmg8OdS6XbXUtxnkP4/view?usp=drivesdk',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Nearby+Houses+Finder',
    },
    {
      title: 'Child Mortality Visualization',
      description: 'An interactive dashboard that visualizes under-5 child mortality rates across the world. The data is sourced from the World Bank and allows users to explore trends, compare countries, and view global distributions via charts and maps.',
      technologies: ['React', 'D3.js', 'Data Visualization', 'World Bank API'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: 'https://drive.google.com/file/d/1lKQcyJW8KCNQTm2vWoiQWz4CjzMdFEWv/view?usp=drivesdk',
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Child+Mortality+Dashboard',
    },
    {
      title: 'Sorting Algorithm Visualizer',
      description: 'This project visualizes various sorting algorithms in action, allowing users to see how different algorithms perform on sample data. It includes features like step-by-step execution and time complexity analysis. Built as a React app using Three.js for 3D visualization and D3.js for 2D charts.',
      technologies: ['React', 'Three.js', 'D3.js', 'Algorithms', 'Data Structures'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: 'https://drive.google.com/file/d/14DCBKYdT9fobxJJa9ghBDk5zqWdPJKfQ/view?usp=drivesdk',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Sorting+Visualizer',
    },
  ];

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
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-container">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className={`project-overlay ${hoveredProject === index ? 'active' : ''}`}>
                    <div className="project-links">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View Code"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.videoLink && (
                        <a
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="Watch Demo"
                        >
                          <FaPlay />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

