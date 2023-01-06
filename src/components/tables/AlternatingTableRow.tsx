import { WithTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { TableRowProps } from '@mui/material/TableRow';
import { alpha } from '@mui/system/colorManipulator';
import React from 'react';
import ClickableTableRow from './ClickableTableRow';

interface AlternatingTableRowProps extends TableRowProps {
  rowIndex?: number;
}

const AlternatingTableRow = ({ rowIndex, ...rest }: AlternatingTableRowProps) => {
  if (rowIndex === undefined) {
    // when row index isn't passed in, just use CSS-based alternating table row
    return <EvenOddAlternatingTableRow {...rest} />;
  }

  // change the style on even, otherwise just return the clickable table row
  if (rowIndex % 2 === 1) {
    return <AlternatedTableRow {...rest} />;
  }

  return <ClickableTableRow {...rest} />;
};
export default AlternatingTableRow;

const EvenOddAlternatingTableRow = styled(ClickableTableRow)`
  &:nth-of-type(even) {
    background-color: ${({ theme }: WithTheme<TableRowProps, Theme>) => buildAlternateColor(theme)};
  }
`;

const AlternatedTableRow = styled(ClickableTableRow)`
  background-color: ${({ theme }: WithTheme<TableRowProps, Theme>) => buildAlternateColor(theme)};
`;

const buildAlternateColor = (theme: Theme) =>
  alpha(theme.palette.primary.main, theme.palette.mode == 'light' ? 0.08 : 0.16);
