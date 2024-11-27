import LogoMeli from '../../../assets/image/Logo_ML@2x.png.png';
import '../header/NavHeader.style.scss';
import Logo from '../../atoms/logo/Logo';



const NavHeader = () => {
  return (
    <header>
      <div className="nav-header">
        <div className="nav-header__logo-container">
          <Logo src={LogoMeli} alt="Mercado Libre Logo" />
          <span className="nav-header__title">Mercado Libre 25 Años</span>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
