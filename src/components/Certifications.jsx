import React, { useEffect } from 'react';

const Certifications = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const section = document.getElementById('certifications');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Achievements</div>
          <h2 className="section-title">Certifications & Activities</h2>
          <p className="section-subtitle">
            Continuous learning and active participation in community initiatives
          </p>
        </div>
        <div className="certifications-grid">
          <div className="glass-card cert-item">
            <div className="cert-icon">🏆</div>
            <h3 className="cert-title">Java Programming Certificate</h3>
            <p className="cert-date">December 2023</p>
          </div>
          <div className="glass-card cert-item">
            <div className="cert-icon">🌱</div>
            <h3 className="cert-title">Treasurer, Green Club</h3>
            <p className="cert-date">May 2024 – April 2025</p>
          </div>
          <div className="glass-card cert-item">
            <div className="cert-icon">🎭</div>
            <h3 className="cert-title">Puppet Coordinator, Tamil Mandram</h3>
            <p className="cert-date">July 2024 – April 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
