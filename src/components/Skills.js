import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Backend Development',
      items: [
        { name: 'Core Java & Java 8+', icon: '☕' },
        { name: 'Spring Boot', icon: '🌱' },        
        { name: 'RESTful APIs', icon: '🔌' },
        { name: 'Hibernate ORM', icon: '🗄️' },
        { name: 'Spring JDBC', icon: '💾' },
        { name: 'Struts2 Framework', icon: '⚡' },
        { name: 'JSP', icon: '📜' },        
        { name: 'JDBC', icon: '🔰' },
        {name: 'Thymeleaf', icon: '🍃'}

      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: '🐬' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'SQL Server', icon: '🔌' },
        { name: 'Database Design', icon: '📊' },
        { name: 'SQL Optimization', icon: '⚡' },
        { name: 'Stored Procedures', icon: '📝' }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git & GitHub', icon: '🔀' },
        { name: 'Postman', icon: '📮' },
        { name: 'Maven', icon: '📦' },
        { name: 'IntelliJ IDEA', icon: '💡' },
        { name: 'VS Code', icon: '💻' },
        { name: 'API Gateway', icon: '🚪' }
      ]
    },
    {
      category: 'Languages & Concepts',
      items: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'C++', icon: '⚙️' },
        { name: 'C#', icon: '🔷' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'HTML5 & CSS3', icon: '🎨' },
        { name: 'OOP Principles', icon: '🏗️' },
        { name: 'Design Patterns', icon: '🎯' }
      ]
    }
  ];

  return (
    <section id="skills" className="fade-in">
      <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="skill-item">
                  <span className="skill-icon">{item.icon}</span>
                  <span className="skill-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

