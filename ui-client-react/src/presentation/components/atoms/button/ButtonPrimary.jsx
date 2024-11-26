import React from 'react';
import { Button } from '@mui/material';
import './ButtonPrimary.scss';

const ButtonPrimary = ({ children, onClick, disabled, ...props }) => (
  <Button
    variant="contained"
    className="button-primary"
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);

export default ButtonPrimary;
