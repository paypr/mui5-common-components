import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const DisclaimerText = ({ variant, children, ...rest }: TypographyProps<'div'>) => (
  <Typography {...rest} variant={variant || 'body2'} component="div">
    <em>{children}</em>
  </Typography>
);
export default DisclaimerText;
