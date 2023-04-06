import { css } from '@emotion/react';
import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';

export interface TabsContainerProps extends BoxProps {}

const TabsContainer = ({ sx, ...props }: TabsContainerProps) => {
  return (
    <Box
      {...props}
      sx={{ ...(sx || {}), borderBottom: 1, borderColor: 'divider' }}
      css={css`
        width: 100%;
      `}
    />
  );
};
export default TabsContainer;
