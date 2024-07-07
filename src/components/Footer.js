import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="contact-info">
          <p>©FitForLife</p>
          <p>Ottawa, CA</p>
          <p>support@fitgmail.com</p>
          <p>+1 (800) 555-3535</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
