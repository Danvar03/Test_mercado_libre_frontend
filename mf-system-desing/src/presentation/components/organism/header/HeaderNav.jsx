import LogoMeli from '../../../assets/image/Logo_ML@2x.png.png';
import '../header/NavHeader.style.scss';
import Logo from '../../atoms/logo/Logo';

const NavHeader = () => {
  return (
    <header>
      <div className="nav-header">
        <Logo src={LogoMeli} alt="Mercado Libre Logo" />
      </div>
    </header>
  );
};

export default NavHeader;
