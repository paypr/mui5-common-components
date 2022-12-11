import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const DetailText = ({ variant, ...rest }: TypographyProps<'div'>) => (
  <Typography {...rest} variant={variant || 'body2'} component="div" />
);
export default DetailText;
