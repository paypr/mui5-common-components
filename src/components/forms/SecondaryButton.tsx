import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

export interface SecondaryButtonProps extends ButtonProps {}

const SecondaryButton = ({ variant, color, ...props }: SecondaryButtonProps) => (
  <Button {...props} variant={variant || 'text'} color={color || 'inherit'} />
);
export default SecondaryButton;
