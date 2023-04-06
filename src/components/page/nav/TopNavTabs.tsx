import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import React from 'react';
import TabsContainer from '../../containers/TabsContainer';

export interface TopNavTabsProps extends TabsProps {
  children?: React.ReactNode;
}

const TopNavTabs = ({ variant, ...props }: TopNavTabsProps) => {
  const theme = useTheme();

  return (
    <TabsContainer>
      <Box
        css={css`
          min-height: ${theme.mixins.toolbar.minHeight}px;
          margin-bottom: ${theme.spacing(1)};
        `}
      />
      <Tabs {...props} variant={variant || 'fullWidth'} />
    </TabsContainer>
  );
};
export default TopNavTabs;
