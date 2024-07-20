import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ServicesModal from './ServicesModal';
import LanguageContext from './LanguageContext';

const Header = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

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

  const t = translations[language];

  return (
    <>
      <header className="header" role="banner">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="logo">
          <Link to="/Gym_website_react">{t.logo}</Link>
        </div>
        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} role="navigation">
          <Link to="/our-process" role="menuitem">{t.ourProcess}</Link>
          <a href="#services" className={showServicesMenu ? 'glowing' : ''} role="menuitem" onClick={handleToggleServicesMenu}>{t.services}</a>
          <Link to="/packages" role="menuitem">{t.packages}</Link>
          <Link to="/consultation" role="menuitem">{t.consultation}</Link>
          <Link to="/join-team" role="menuitem">{t.joinTeam}</Link>
          <button onClick={toggleLanguage} className="language-toggle" aria-label={language === 'en' ? 'View site in Ukrainian' : 'View site in English'}>
            {language === 'en' ? 'сайт українською мовою' : 'View in English'}
          </button>
        </nav>
      </header>
      <ServicesModal show={showServicesMenu} handleClose={handleToggleServicesMenu} />
    </>
  );
};

export default Header;
