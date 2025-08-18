import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 200) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu" 
        aria-expanded={menuOpen}
        role="button"
        tabIndex="0"
      >
        <span></span><span></span><span></span>
      </div>
      <ul className={`nav-list ${menuOpen ? 'active' : ''}`} id="navList">
        {['about','skills','projects','experience','certifications','contact'].map(item => (
          <li key={item}>
            <a 
              href={`#${item}`} 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase()+item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
