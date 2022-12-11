import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

export type LoaderButtonProps = ButtonProps & {
  loading?: boolean;
};

const LoaderButton = ({ loading, disabled, ...rest }: LoaderButtonProps) => (
  <Button {...rest} disabled={disabled || loading} />
);
export default LoaderButton;
