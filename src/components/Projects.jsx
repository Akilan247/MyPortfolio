import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    // Animation handled by global observer in App.js
  }, []);

  return (
    <section id="projects" className="animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Featured Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative backend solutions and scalable applications
          </p>
        </div>

        <div className="projects-grid">
          {/* ATS */}
          <div className="project-card">
            <div className="glass-card">
              <div className="project-header">
                <h3 className="project-title">Applicant Tracking System</h3>
              </div>
              <p className="project-tech">Spring Boot • JWT • Spring Security • MySQL • Spring Data JPA</p>
              <p className="project-description">
                Built a comprehensive backend system with modular REST APIs, role-based access control,
                global exception handling, and production-ready architecture for managing job applications
                and candidate tracking. Features secure authentication, data validation, and optimized database operations.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Akilan247/applicant-tracking-system"
                  className="project-link"
                  aria-label="View ATS backend code on GitHub"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Library Tracker */}
          <div className="project-card">
            <div className="glass-card">
              <div className="project-header">
                <h3 className="project-title">Library Resource Tracker</h3>
                <div className="project-status">Completed</div>
              </div>
              <p className="project-tech">Java • JDBC • MySQL</p>
              <p className="project-description">
                Developed a console-based CRUD application for library management with dynamic collections,
                efficient database operations using JDBC, and robust data persistence layer. Features include
                book management, member tracking, and transaction handling.
              </p>
              <div className="project-links">
                <a href="https://github.com/Akilan247/Library-Management-System" className="project-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View Code
                </a>

              </div>
            </div>
          </div>

          {/* Console Database Manager */}
          <div className="project-card">
            <div className="glass-card">
              <div className="project-header">
                <h3 className="project-title">Console Database Manager</h3>
                <div className="project-status">Completed</div>
              </div>
              <p className="project-tech">Java • Collection</p>
              <p className="project-description">
                Built a lightweight command-line interface database manager simulating SQL-like commands using
                core Java and collection APIs. Enabled creation, insertion, deletion, and querying of records
                with dynamic memory structures (HashMap). Demonstrated object-oriented design, input parsing,
                and backend logic simulation without a UI layer.
              </p>
              <div className="project-links">
                <a href="https://github.com/Akilan247/JavaProject" className="project-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
