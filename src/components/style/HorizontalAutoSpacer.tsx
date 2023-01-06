import { css } from '@emotion/react';
import Box, { BoxProps } from '@mui/material/Box';

const HorizontalAutoSpacer = (props: BoxProps) => (
  <Box
    {...props}
    css={css`
      flex: 1 1 100%;
    `}
  />
);
export default HorizontalAutoSpacer;
