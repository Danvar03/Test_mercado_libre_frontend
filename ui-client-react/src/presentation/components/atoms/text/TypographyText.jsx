import React from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx'; 
import './TypographyText.scss';

const TypographyText = ({ children, variant = 'body1', className, ...props }) => (
  <Typography
    className={clsx('typography-text', className)} 
    variant={variant}
    {...props}
  >
    {children}
  </Typography>
);

export default TypographyText;
