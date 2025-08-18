import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contacts';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  useEffect(() => {
    // Global scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Parallax hero visual
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroVisual = document.querySelector('.hero-visual');
      if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Typing effect for tagline
    const tagline = document.querySelector('.hero-tagline', '.hero-subtitle');
    if (tagline) {
      const text = tagline.textContent;
      tagline.textContent = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          tagline.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      setTimeout(typeWriter, 800);
    }

     const tagline2 = document.querySelector('.hero-subtitle');
    if (tagline2) {
      const text = tagline2.textContent;
      tagline2.textContent = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          tagline2.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      setTimeout(typeWriter, 800);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Essential Background Elements */}
      <div className="bg-shapes" aria-hidden="true">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;



