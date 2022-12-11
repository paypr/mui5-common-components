import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const DetailInlineTitle = ({ variant, children, ...rest }: TypographyProps) => (
  <Typography {...rest} variant={variant || 'body1'} component="span">
    <b>{children}:&nbsp;</b>
  </Typography>
);
export default DetailInlineTitle;
