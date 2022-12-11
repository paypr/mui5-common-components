import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const DetailInlineValue = ({ variant, ...rest }: TypographyProps<'span'>) => (
  <Typography {...rest} variant={variant || 'body1'} component="span" />
);
export default DetailInlineValue;
