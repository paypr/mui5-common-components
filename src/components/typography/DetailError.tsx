import { TypographyProps } from '@mui/material/Typography';
import React from 'react';
import DetailValue from './DetailValue';

export interface DetailErrorProps {}

const DetailError = ({ color, variant, ...rest }: TypographyProps<'div'>) => (
  <DetailValue color={color || 'error'} variant={variant || 'caption'} {...rest} />
);
export default DetailError;
