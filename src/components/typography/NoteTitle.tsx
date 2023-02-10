import Typography, { TypographyProps } from '@mui/material/Typography';
import * as React from 'react';

interface NoteTitleProps extends TypographyProps {}

const NoteTitle = ({ variant, style, ...rest }: NoteTitleProps) => (
  <Typography {...rest} variant={variant || 'subtitle1'} />
);
export default NoteTitle;
