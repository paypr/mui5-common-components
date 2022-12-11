import Typography from '@mui/material/Typography';
import React from 'react';

export interface ContentLoaderProps {}

const ContentLoader = ({}: ContentLoaderProps) => (
  <Typography variant="subtitle1" component="div">
    Loading...
  </Typography>
);
export default ContentLoader;
