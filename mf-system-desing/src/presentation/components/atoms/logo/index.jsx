import React from 'react';

const LogoYellow = (props) => {
  return (
    <figure data-testid="logo-test">
      <img src={src} alt={alt} {...props} />
    </figure>
  );
};

export default LogoYellow;
