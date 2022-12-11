import Grid from '@mui/material/Grid';
import React from 'react';

interface FullPageContainerProps {
  children: React.ReactNode;
}

const FullPageContainer = ({ children, ...rest }: FullPageContainerProps) => (
  <Grid {...rest} container justifyContent="center" spacing={2}>
    <Grid item xs={12} sm={10} md={8} lg={6} xl={4} children={children} />
  </Grid>
);
export default FullPageContainer;
