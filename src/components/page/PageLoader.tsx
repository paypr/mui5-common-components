import Typography from '@mui/material/Typography';
import React from 'react';

export interface PageLoaderProps {}

const PageLoader = ({}: PageLoaderProps) => (
  <Typography variant="subtitle1" component="div">
    Loading...
  </Typography>
);
export default PageLoader;
