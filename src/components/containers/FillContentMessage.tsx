import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface FillContentMessageProps {
  text?: string;
  children?: React.ReactNode;
}

const FillContentMessage = (props: FillContentMessageProps) => {
  const theme = useTheme();
  return (
    <Paper>
      <Box
        css={css`
          padding: ${theme.spacing(3)};
          justify-content: center;
        `}
      >
        <Typography variant="h6">{props.text || props.children}</Typography>
      </Box>
    </Paper>
  );
};
export default FillContentMessage;
