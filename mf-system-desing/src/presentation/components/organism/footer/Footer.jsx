import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Mercado-Libre 2024 Daniela Vargas</p>
        <a
          href="https://github.com/Danvar03/Test_mercado_libre_frontend" 
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
