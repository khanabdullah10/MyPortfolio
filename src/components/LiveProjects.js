import React, { useState, useEffect } from 'react';
import './LiveProjects.css';

const ProjectCard = ({ project, isMobile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  useEffect(() => {
    setIsExpanded(!isMobile);
  }, [isMobile]);

  return (
    <div className="live-project-card">
      <div className="project-image-container">
        {!imageLoaded && !imageError && (
          <div className="image-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
        {imageError && (
          <div className="image-error">
            <p>Image not available</p>
          </div>
        )}
        <img 
          src={project.image} 
          alt={project.title} 
          className={`project-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        <div className="project-overlay">
          <span className="live-badge">🔴 LIVE</span>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        {(!isMobile || isExpanded) && (
          <>
            <p className="project-description">{project.description}</p>
            
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
          </>
        )}

        {isMobile && (
          <button 
            type="button" 
            className="project-toggle" 
            onClick={() => setIsExpanded(prev => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Hide details' : 'Show details'}
          </button>
        )}

        <div className="project-actions">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Live Site →
          </a>
        </div>
      </div>
    </div>
  );
};

const LiveProjects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const liveProjects = [
    {
      title: 'Casino Game Admin Panel',
      description: 'A comprehensive admin panel for managing casino gaming operations. Built with Spring Boot, featuring real-time analytics, user management, game configuration, and transaction monitoring.',
      url: 'https://uat.chancesgames.com:9090/jarolAdmin',
      tech: ['Spring Boot', 'Spring MVC', 'JSP', 'SQL Server', 'Hibernate','Azure DataBase','AWS'],
      features: [
        'Real-time analytics dashboard',
        'User and game management',
        'Transaction monitoring',
        'Legacy to modern migration'
      ],
      image: '/thumbnail/welcome-screen-1.png'
    },
    {
      title: 'Mello Health - Lab to Door',
      description: 'A complete healthcare platform enabling patients to book blood tests and connect with diagnostic vendors. Full-stack application with booking management, vendor integration, and real-time notifications.',
      url: 'https://mellohealth.in/',
      tech: ['HTML','CSS','JavaScript','Netlify','GoDaddy'],
      features: [
        'Blood test booking system',
        'Vendor integration',
        'Real-time notifications',
        'Responsive design',
        'Secure payment integration'
      ],
      image: '/thumbnail/mellohealth.png'
    }
  ];

  return (
    <section id="live-projects" className="fade-in live-projects-section">
      <h2 className="section-title">Live <span className="gradient-text">Projects</span></h2>
      <p className="section-subtitle">Real-world applications I've built and deployed</p>
      
      <div className="live-projects-grid">
        {liveProjects.map((project, index) => (
          <ProjectCard key={index} project={project} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;

