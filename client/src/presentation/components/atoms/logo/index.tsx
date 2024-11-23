import { LogoProps } from './LogoYellow.type';

const LogoYellow = ({ src, alt = 'Logo', ...props }: LogoProps) => {
  return (
    <figure data-testid="logo-test">
      <img src={src} alt={alt} {...props} />
    </figure>
  );
};

export default LogoYellow;
