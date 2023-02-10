import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import FillContent from './FillContent';

interface FillContentMessageProps {
  text?: string;
  children?: React.ReactNode;
}

const FillContentMessage = (props: FillContentMessageProps) => {
  const theme = useTheme();
  return (
    <FillContent
      css={css`
        padding: ${theme.spacing(3)};
        display: flex;
        justify-content: center;
      `}
    >
      <Typography variant="h6">{props.text || props.children}</Typography>
    </FillContent>
  );
};
export default FillContentMessage;
