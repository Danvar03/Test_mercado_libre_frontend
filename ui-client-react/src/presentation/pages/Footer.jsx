import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Mercado-Libre 2023 Daniela Vargas</p>
        <a
          href="https://github.com/daniela03v" // Cambia este enlace por tu perfil de GitHub si es diferente
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
