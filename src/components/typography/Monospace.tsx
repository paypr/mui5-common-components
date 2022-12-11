import { css } from '@emotion/react';
import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';

export interface MonospaceProps extends BoxProps {}

const Monospace = ({ ...rest }: MonospaceProps) => (
  <Box
    css={css`
      font-family: 'Roboto Mono', monospace;
    `}
    {...rest}
  />
);
export default Monospace;
