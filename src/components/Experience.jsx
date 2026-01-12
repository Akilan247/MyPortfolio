import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Career Journey</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building expertise through hands-on experience and continuous learning</p>
        </div>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-dot"></div>

            <div className="experience-content">
              <div className="glass-card">
                <h3 className="experience-title">Automation Engineer</h3>
                <p className="experience-company">Aximsoft</p>
                <p className="experience-date">Oct 2025 – Present</p>
                <p className="experience-description">
                  Working as an Automation Engineer with hands-on experience in test automation,
                  framework stabilization, regression testing, and improving automation reliability
                  across multiple portals.
                </p>
              </div>
            </div>

            <div className="experience-content">
              <div className="glass-card">
                <h3 className="experience-title">Telecommunications Intern</h3>
                <p className="experience-company">BSNL (Bharat Sanchar Nigam Limited)</p>
                <p className="experience-date">May 2024</p>
                <p className="experience-description">
                  Gained hands-on experience with transmission technologies, optical fiber systems,
                  BTS/BSC setup procedures, and conducted site surveys for telecommunications
                  infrastructure projects. Developed understanding of network architecture and
                  telecommunications protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
