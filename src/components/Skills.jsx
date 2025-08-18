import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    // Skill tag interactions
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
      tag.addEventListener('click', () => {
        tag.style.transform = 'scale(0.95)';
        setTimeout(() => { tag.style.transform = ''; }, 150);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Technologies</div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Crafting robust backend solutions with modern technologies and best practices
          </p>
        </div>
        <div className="skills-grid">
          <div className="glass-card">
            <div className="skill-category">
              <h3>💻 Core Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag" role="button" tabIndex="0">Java</span>
                <span className="skill-tag" role="button" tabIndex="0">Spring Boot</span>
                <span className="skill-tag" role="button" tabIndex="0">Hibernate</span>
                <span className="skill-tag" role="button" tabIndex="0">REST API</span>
                <span className="skill-tag" role="button" tabIndex="0">Spring Security</span>
                <span className="skill-tag" role="button" tabIndex="0">MySQL</span>
                <span className="skill-tag" role="button" tabIndex="0">HTML</span>
                <span className="skill-tag" role="button" tabIndex="0">CSS</span>
                <span className="skill-tag" role="button" tabIndex="0">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="glass-card">
            <div className="skill-category">
              <h3>🛠️ Supporting Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag" role="button" tabIndex="0">VS Code</span>
                <span className="skill-tag" role="button" tabIndex="0">GitHub</span>
                <span className="skill-tag" role="button" tabIndex="0">Git</span>
                <span className="skill-tag" role="button" tabIndex="0">Postman</span>
                <span className="skill-tag" role="button" tabIndex="0">Maven</span>
                <span className="skill-tag" role="button" tabIndex="0">IntelliJ IDEA</span>
                <span className="skill-tag" role="button" tabIndex="0">Eclipse</span>
                {/* <span className="skill-tag" role="button" tabIndex="0">MySQL WorkBench</span> */}
                
              </div>
            </div>
          </div>
          <div className="glass-card">
            <div className="skill-category">
              <h3>Concepts & Practices</h3>
              <div className="skill-tags">
                <span className="skill-tag" role="button" tabIndex="0">Object-Oriented Programming</span>
                <span className="skill-tag" role="button" tabIndex="0">Layered Architecture</span>
                <span className="skill-tag" role="button" tabIndex="0">Data Structures and Algorithm</span>
                <span className="skill-tag" role="button" tabIndex="0">Layered Design</span>
                <span className="skill-tag" role="button" tabIndex="0">DBMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
