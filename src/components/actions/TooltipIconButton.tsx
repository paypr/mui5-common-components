import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';
import TooltipItem from '../typography/TooltipItem';

export interface TooltipIconButtonProps extends IconButtonProps {
  title: string;
}

const TooltipIconButton = ({ title, ...props }: TooltipIconButtonProps) => (
  <TooltipItem title={title}>
    <IconButton {...props} />
  </TooltipItem>
);
export default TooltipIconButton;
