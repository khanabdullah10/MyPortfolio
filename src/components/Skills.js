import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const getIconUrl = (name, iconKey) => {
    // Use DevIcons CDN for better tech icon coverage
    const devIconMap = {
      'java': 'java/java-original.svg',
      'spring': 'spring/spring-original.svg',
      'hibernate': 'hibernate/hibernate-original.svg',
      'apache': 'apache/apache-original.svg',
      'thymeleaf': 'thymeleaf/thymeleaf-original.svg',
      'mysql': 'mysql/mysql-original.svg',
      'mongodb': 'mongodb/mongodb-original.svg',
      'microsoftsqlserver': 'microsoftsqlserver/microsoftsqlserver-plain.svg',
      'github': 'github/github-original.svg',
      'postman': 'postman/postman-original.svg',
      'maven': 'maven/maven-original.svg',
      'intellijidea': 'intellij/intellij-original.svg',
      'visualstudiocode': 'vscode/vscode-original.svg',
      'python': 'python/python-original.svg',
      'cplusplus': 'cplusplus/cplusplus-original.svg',
      'csharp': 'csharp/csharp-original.svg',
      'javascript': 'javascript/javascript-original.svg',
      'html5': 'html5/html5-original.svg',
      'css3': 'css3/css3-original.svg'
    };
    
    // Map skill names to icon keys
    const skillIconMap = {
      'Core Java & Java 8+': 'java',
      'Java': 'java',
      'Spring Boot': 'spring',
      'Spring JDBC': 'spring',
      'Hibernate ORM': 'hibernate',
      'Struts2 Framework': 'apache',
      'JSP': 'java',
      'JDBC': 'java',
      'Thymeleaf': 'thymeleaf',
      'MySQL': 'mysql',
      'MongoDB': 'mongodb',
      'SQL Server': 'microsoftsqlserver',
      'SQL Optimization': 'mysql',
      'Git & GitHub': 'github',
      'Postman': 'postman',
      'Maven': 'maven',
      'IntelliJ IDEA': 'intellijidea',
      'VS Code': 'visualstudiocode',
      'Python': 'python',
      'C++': 'cplusplus',
      'C#': 'csharp',
      'JavaScript': 'javascript',
      'HTML5 & CSS3': 'html5'
    };
    
    const iconKeyToUse = skillIconMap[name] || iconKey || 'java';
    const iconPath = devIconMap[iconKeyToUse];
    
    if (iconPath) {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
    }
    
    // Fallback to Simple Icons or alternative sources for items not in DevIcons
    const alternativeIconMap = {
      'RESTful APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      'Database Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Stored Procedures': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'API Gateway': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonapigateway.svg',
      'OOP Principles': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Design Patterns': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    };
    
    if (alternativeIconMap[name]) {
      return alternativeIconMap[name];
    }
    
    // Final fallback
    return `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/code.svg`;
  };

  const skills = [
    {
      category: 'Backend Development',
      items: [
        { name: 'Core Java & Java 8+', icon: 'java' },
        { name: 'Spring Boot', icon: 'spring' },        
        { name: 'RESTful APIs', icon: 'restapi' },
        { name: 'Hibernate ORM', icon: 'hibernate' },
        { name: 'Spring JDBC', icon: 'spring' },
        { name: 'Struts2 Framework', icon: 'apache' },
        { name: 'JSP', icon: 'java' },        
        { name: 'JDBC', icon: 'java' },
        { name: 'Thymeleaf', icon: 'thymeleaf' }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'SQL Server', icon: 'microsoftsqlserver' },
        { name: 'Database Design', icon: 'database' },
        { name: 'SQL Optimization', icon: 'mysql' },
        { name: 'Stored Procedures', icon: 'database' }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git & GitHub', icon: 'github' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Maven', icon: 'apachemaven' },
        { name: 'IntelliJ IDEA', icon: 'intellijidea' },
        { name: 'VS Code', icon: 'visualstudiocode' },
        { name: 'API Gateway', icon: 'amazonapigateway' }
      ]
    },
    {
      category: 'Languages & Concepts',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'Python', icon: 'python' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'C#', icon: 'csharp' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'HTML5 & CSS3', icon: 'html5' },
        { name: 'OOP Principles', icon: 'object-oriented-programming' },
        { name: 'Design Patterns', icon: 'design-patterns' }
      ]
    }
  ];

  return (
    <section id="skills" className="fade-in">
      <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const isExpanded = expandedCard === index;
          const minItems = Math.min(...skills.map(s => s.items.length));
          const hasMoreItems = skill.items.length > minItems;
          
          return (
            <div 
              key={index} 
              className={`skill-category ${isExpanded ? 'expanded' : ''} ${hasMoreItems ? 'expandable' : ''}`}
              onClick={() => hasMoreItems && setExpandedCard(isExpanded ? null : index)}
            >
              <h3>{skill.category}</h3>
              <ul className={`skill-list ${isExpanded ? 'expanded' : ''}`}>
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="skill-item">
                    <span className="skill-icon">
                      <img 
                        src={getIconUrl(item.name, item.icon)} 
                        alt={item.name}
                        onError={(e) => {
                          // Fallback to a generic code icon if the specific icon doesn't exist
                          e.target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/code.svg`;
                        }}
                      />
                    </span>
                    <span className="skill-name">{item.name}</span>
                  </li>
                ))}
              </ul>
              {hasMoreItems && (
                <div className="expand-indicator">
                  {isExpanded ? 'Click to collapse' : 'Click to expand'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

