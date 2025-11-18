import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const timelineRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const itemRefs = useRef([]);
  const trainRef = useRef(null);
  const [trainPosition, setTrainPosition] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === timelineRef.current) {
            setIsAnimated(true);
          } else {
            entry.target.classList.add('visible');
          }
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const timelineTop = timelineRect.top + scrollTop;
      const viewportCenter = scrollTop + window.innerHeight / 2;
      
      // Check if viewport center is within timeline bounds
      if (viewportCenter >= timelineTop && viewportCenter <= timelineTop + timelineRect.height) {
        const progress = (viewportCenter - timelineTop) / timelineRect.height;
        const maxPosition = timelineRect.height - 30;
        const newPosition = Math.min(Math.max(progress * maxPosition, 0), maxPosition);
        setTrainPosition(newPosition);
      } else if (viewportCenter < timelineTop) {
        setTrainPosition(0);
      } else if (viewportCenter > timelineTop + timelineRect.height) {
        setTrainPosition(timelineRect.height - 30);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Software Trainer',
      position: 'Itech Computer Education',
      date: 'Sep 2025 – Present | Mumbai, Maharashtra',
      points: [
        'Teaching undergraduate Degree and Diploma students (BCA, BSc IT/CS, DIT, etc.) and preparing them for industry-driven IT roles.',
        'Training students in core programming fundamentals including Java, Python, C++, C#, SQL, Data Structures, and OOPs.',
        'Guiding learners through advanced technologies such as Spring Boot, Hibernate, JDBC, RESTful APIs, Git/GitHub, and web development basics.',
        'Supporting students in developing strong problem-solving skills and building real-world projects aligned with industry standards.',
        'Mentoring learners for internship and job readiness through hands-on assignments, coding practices, and project evaluations.'
      ]
    },
    {
      title: 'Java Developer',
      position: 'CHETU INDIA Pvt Ltd',
      date: 'Nov 2024 – Aug 2025 | Noida',
      points: [
        'Leading migration of legacy Struts2 admin panel to modern Spring Boot architecture',
        'Converted 30+ Struts2 action classes to Spring MVC controllers with Hibernate ORM',
        'Migrated 50+ MySQL stored procedures using JdbcTemplate and SimpleJdbcCall',
        'Reduced codebase volume by 25% through Lombok and annotation-driven configuration',
        'Optimized database connectivity and implemented transaction management'
      ]
    },
    {
      title: 'Java Developer Trainee',
      position: 'Chetu Skill Center',
      date: 'Jun 2024 – Oct 2024 | Noida',
      points: [
        'Architected and deployed RESTful APIs using Spring MVC',
        'Designed API testing workflows with Postman collections',
        'Conducted end-to-end API testing ensuring reliability and scalability',
        'Configured API Gateway for secure service integration'
      ]
    },

    {
      title: 'Full Stack Web Developer',
      position: 'Mello Health',
      date: 'Feb 2024 - May 2024 | Remote',
      points: [
        'Developed a complete end-to-end web application for Mello Health, a platform that enables patients to book blood tests and connect directly with diagnostic vendors.',
        'Built the full system from scratch and deployed it successfully to production.',
        'Designed and implemented responsive, user-friendly interfaces using HTML, CSS, JavaScript, and modern UI practices.',
        'Created secure and scalable backend services using Java/Spring Boot with RESTful APIs for booking management, vendor integration, and patient communication.',
        'Integrated real-time vendor notifications and booking status updates to streamline the patient–vendor workflow.',
        'Optimized performance, ensured mobile compatibility, and maintained high availability for a live production environment.',
        'Collaborated with stakeholders to refine requirements and continuously enhance the platform based on user feedback.'
      ]
    },



    {
      title: 'Bachelor of Technology in Computer Science',
      position: 'Sunder Deep College of Engineering',
      date: 'Dec 2020 – June 2024 | Ghaziabad',
      points: [
        'Specialized in Software Engineering and Backend Development',
        'Secured 1st position at inter-college coding competition',
        'Honored as MR. FRESHER and MR. FAREWELL during engineering tenure',
        'Completed NASSCOM certification on Fundamentals of Data Analytics'
      ]
    }
  ];

  return (
    <section id="experience" className="fade-in">
      <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
      <div className={`timeline ${isAnimated ? 'animated' : ''}`} ref={timelineRef}>
        <div 
          className="train-emoji" 
          ref={trainRef}
          style={{ top: `${trainPosition}px` }}
        >
          🚂
        </div>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item"
            ref={el => itemRefs.current[index] = el}
          >
            <h3>{exp.title}</h3>
            <p className="position">{exp.position}</p>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

