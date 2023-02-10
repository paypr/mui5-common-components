import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface PageErrorProps {
  error?: Error;
}

const PageError = ({ error }: PageErrorProps) => {
  const theme = useTheme();
  return (
    <Paper>
      <Box
        css={css`
          padding: ${theme.spacing(3)};
        `}
      >
        <Typography variant="h4" color="error">
          There was a problem loading this page.
        </Typography>
        {error ? <pre>{error.toString()}</pre> : null}
      </Box>
    </Paper>
  );
};
export default PageError;
