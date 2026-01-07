import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="fade-in">
      <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a Graduate Engineer with a B.Tech in Computer Science Engineering and, by passion, a dedicated
            Java developer. My journey in software development is driven by curiosity, consistency, and a strong
            interest in building robust, scalable, and high-performance backend systems.
          </p>
          <p>
            I have previously worked as a Java Developer at <strong>Chetu India Pvt. Ltd.</strong>, a US-based
            multinational company, where I contributed to a large-scale gaming (casino spinning) platform. I was
            responsible for modernizing the legacy application stack by migrating it from
            <strong>Struts</strong> to <strong>Spring MVC</strong> using <strong>JSP</strong> and <strong>SQL
              Server</strong>. I <strong>single-handedly handled the complete migration</strong> of the admin
            panel, including refactoring legacy code, redesigning controllers and views, optimizing database
            interactions, and significantly improving overall system performance and maintainability.
          </p>
          <p>
            Currently, I'm working as a <strong>Software Trainer at Itech Computer
              Education</strong>, where I teach programming fundamentals and assist students in building a
            strong foundation in software development and modern technologies.
          </p>
          <p>
            I am continuously learning and evolving, with a strong focus on <strong>Spring Boot
              microservices</strong>, distributed systems, and backend performance optimization. My
            development approach emphasizes <strong>testability, documentation, and continuous
              improvement</strong> through hands-on experience and continuous learning.
          </p>
        </div>
        <div className="quick-facts">
          <div className="fact-card">
            <h3>Location</h3>
            <p>📍 Mumbai, Maharashtra</p>
          </div>
          <div className="fact-card">
            <h3>Education</h3>
            <p>🎓 B.Tech in CSE</p>
          </div>
          <div className="fact-card">
            <h3>Current Role</h3>
            <p>💼 Java Developer<span className="at-symbol">@</span>Chetu.</p>
          </div>
          <div className="fact-card">
            <h3>Focus</h3>
            <p>🚀 Spring Boot-Microservices +  React/Angular</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

