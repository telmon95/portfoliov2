import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'JobSeeker AI – Full-Stack Job Application Automation Platform',
      description: 'Developed a full-stack platform automating job search workflows using Node.js, Express, and TypeScript. Integrated Adzuna and Jooble APIs for multi-source job aggregation and de-duplication. Implemented CV parsing with Affinda API and AI-driven cover letter generation using OpenAI GPT-3.5-Turbo. Built a responsive React + TypeScript frontend and designed MongoDB schemas for lifecycle tracking.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'React', 'MongoDB', 'OpenAI API', 'REST APIs'],
      demoLink: 'https://job-seeker-woad.vercel.app',
      githubLink: 'https://github.com/telmon95/JobSeeker',
      videoLink: null,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=JobSeeker+AI',
    },
    {
      title: 'DorkForge – Tactical OSINT Query Builder',
      description: 'Built a tactical OSINT web application for crafting, visualizing, and managing advanced search engine dorks for authorized security research and reconnaissance. The interface helps turn repeatable search patterns into usable queries for vulnerability discovery, exposed asset research, and investigation workflows.',
      technologies: ['React', 'TypeScript', 'OSINT', 'Cybersecurity', 'Search Operators', 'Vercel'],
      demoLink: 'https://dorkforge-three.vercel.app',
      githubLink: null,
      videoLink: null,
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=DorkForge',
    },
    {
      title: 'LogiCost – Logistics Cost Analysis Platform',
      description: 'Created a logistics cost analysis application for exploring, calculating, and presenting transportation and supply chain cost data. The project focuses on helping users understand cost drivers, compare scenarios, and make clearer operational decisions through a hosted web interface.',
      technologies: ['React', 'Data Analysis', 'Logistics', 'Cost Modeling', 'Responsive UI', 'Vercel'],
      demoLink: 'https://logicost-sandy.vercel.app',
      githubLink: null,
      videoLink: null,
      image: 'https://via.placeholder.com/600x400/14b8a6/ffffff?text=LogiCost',
    },
    {
      title: 'VulneraMCP – AI-Powered Bug Bounty Hunting Platform',
      description: 'Architected an enterprise-grade MCP server automating reconnaissance, vulnerability testing, and reporting. Integrated OWASP ZAP, Burp Suite, Caido, nmap, Amass, and Subfinder into a unified workflow. Implemented PostgreSQL for findings storage, Redis for caching, and Puppeteer for browser automation. Designed AI-driven pattern matching to improve exploit detection accuracy over time.',
      technologies: ['Python', 'PostgreSQL', 'Redis', 'OWASP ZAP', 'Burp Suite', 'Puppeteer', 'AI/ML'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: null,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=VulneraMCP',
    },
    {
      title: 'Child Mortality Visualization Dashboard',
      description: 'Built an interactive React and D3.js dashboard visualizing global under-5 mortality rates. Integrated World Bank API for real-time data and responsive charts and maps.',
      technologies: ['React', 'D3.js', 'Data Visualization', 'World Bank API'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: 'https://drive.google.com/file/d/1lKQcyJW8KCNQTm2vWoiQWz4CjzMdFEWv/view?usp=drivesdk',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Child+Mortality+Dashboard',
    },
    {
      title: 'Sorting Algorithm Visualizer',
      description: 'Developed a React-based visualization tool demonstrating sorting algorithms with real-time metrics. Utilized Three.js for 3D visualization and D3.js for performance analysis charts.',
      technologies: ['React', 'Three.js', 'D3.js', 'Algorithms', 'Data Structures'],
      demoLink: null,
      githubLink: 'https://github.com/telmon95',
      videoLink: 'https://drive.google.com/file/d/14DCBKYdT9fobxJJa9ghBDk5zqWdPJKfQ/view?usp=drivesdk',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Sorting+Visualizer',
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

