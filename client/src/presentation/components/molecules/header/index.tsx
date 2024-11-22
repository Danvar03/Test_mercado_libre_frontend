import { Box } from '@mui/material';
import LogoMeli from '../../../assets/image/Logo_ML.png';
import '../header/NavHeader.style.scss';
import LogoYellow from '../../atoms/logo';

const NavHeader = () => {
  return (
    <Box className="nav-header">
      <LogoYellow src={LogoMeli} alt="Mercado Libre Logo" />
    </Box>
  );
};

export default NavHeader;
