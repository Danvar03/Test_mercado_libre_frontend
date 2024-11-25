import React from 'react';
import { TextField } from '@mui/material';

const CustomAtom = ({
  name,
  placeholder,
  defaultValue,
  fullWidth = true,
  sx = {},
  ...props
}) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      variant="outlined"
      sx={{
        backgroundColor: '#fff',
        borderRadius: '4px 0 0 4px',
        width: '38rem',
        ...sx,
      }}
      {...props}
    />
  );
};

export default CustomAtom;
