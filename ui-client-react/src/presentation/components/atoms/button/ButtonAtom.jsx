import React from 'react';
import { IconButton } from '@mui/material';

const ButtonAtom = ({
  onClick,
  type = 'button',
  icon,
  sx = {},
  ...props
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: '#ffe600',
        borderRadius: '0 4px 4px 0',
        padding: '8px',
        '&:hover': {
          backgroundColor: '#ffd700',
        },
        ...sx,
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
};

export default ButtonAtom;
