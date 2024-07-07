import React, { useState, useEffect } from 'react';
import './Header.css';
import ServicesModal from './ServicesModal';

const Header = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.getAttribute('id'));
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">FIT FOR LIFE</div>
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#intro" className={isMenuOpen ? '' : 'disabled'}>Our Process</a>
        <a
          href="#services"
          className={showServicesMenu ? 'glowing' : ''}
          onClick={handleToggleServicesMenu}
        >
          Services
        </a>
        <a href="#packages" className="disabled">Packages</a>
        <a href="#consultation" className={isMenuOpen ? '' : 'disabled'}>Consultation</a>
        <a href="#join" className="disabled">Join the Team</a>
      </nav>
      <ServicesModal show={showServicesMenu} handleClose={handleToggleServicesMenu} />
    </header>
  );
};

export default Header;
