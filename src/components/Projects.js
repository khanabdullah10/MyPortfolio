import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'MinorProjects',
      description: 'Collection of Java backend projects demonstrating proficiency in Hibernate ORM, JDBC API integration, and Spring Framework fundamentals with database connectivity.',
      category: 'java spring',
      tech: ['Java', 'Hibernate', 'JDBC', 'Spring'],
      link: 'https://github.com/khanabdullah10/MinorProjects'
    },
    {
      title: 'RapidApp',
      description: 'Full-stack Spring-based web applications featuring CRUD operations, Thymeleaf templating engine for dynamic views, and Spring MVC architecture for clean separation of concerns.',
      category: 'java spring web',
      tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'HTML'],
      link: 'https://github.com/khanabdullah10/RapidApp'
    },
    {
      title: 'RestApi Project',
      description: 'Production-ready RESTful backend API with comprehensive CRUD operations for resource management. Implements proper HTTP methods, status codes, and JSON response handling.',
      category: 'java spring',
      tech: ['Java', 'Spring Boot', 'REST API', 'Postman'],
      link: 'https://github.com/khanabdullah10/RestApi'
    },
    {
      title: 'JavaFromScratch',
      description: 'Comprehensive Java learning repository covering core fundamentals to advanced topics including Collections, Streams, Multithreading, and Design Patterns with practical examples.',
      category: 'java',
      tech: ['Java', 'OOP', 'DSA', 'Algorithms'],
      link: 'https://github.com/khanabdullah10/JavaFromScratch'
    },
    {
      title: '4th Year Projects',
      description: 'Final year academic projects including WhatsApp Chat Analyzer for data insights, Blockchain-based Voting Application for secure elections, and Netflix Clone implementation.',
      category: 'python',
      tech: ['Python', 'Blockchain', 'Data Analysis', 'Flask'],
      link: 'https://github.com/khanabdullah10/4th-Year-Projects'
    },
    {
      title: 'Product Management System',
      description: 'Enterprise-grade web application with complete CRUD functionality for product lifecycle management. Built with Spring Boot, MySQL backend, and Thymeleaf for dynamic UI rendering.',
      category: 'java spring',
      tech: ['Spring Boot', 'Spring MVC', 'MySQL', 'Thymeleaf'],
      link: 'https://github.com/khanabdullah10'
    }
  ];

  const filters = ['all', 'java', 'spring', 'python', 'web'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="fade-in">
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

      <div className="project-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-marquee-container">
        <div className="projects-marquee">
          {[...filteredProjects, ...filteredProjects].map((project, index) => (
            <div key={`${project.title}-${index}`} className="project-card marquee-item" data-category={project.category}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

