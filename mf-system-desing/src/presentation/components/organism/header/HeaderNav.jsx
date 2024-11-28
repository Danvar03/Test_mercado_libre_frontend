import React from 'react';
import LogoMeli from '../../../assets/image/Logo_ML@2x.png.png';
import '../header/NavHeader.style.scss';
import Logo from '../../atoms/logo/Logo';

const NavHeader = () => {
  const redirectToHome = () => {
    window.location.href = '/'; 
  };

  return (
    <header>
      <div className="nav-header">
        <div className="nav-header__logo-container" onClick={redirectToHome} style={{ cursor: 'pointer' }}>
          <Logo src={LogoMeli} alt="Mercado Libre Logo" />
        </div>
        <span className="nav-header__title">Mercado Libre 25 Años</span>
      </div>
    </header>
  );
};

export default NavHeader;
