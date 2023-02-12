import { useTheme } from '@mui/material/styles';
import TableContainer, { TableContainerProps } from '@mui/material/TableContainer';
import * as React from 'react';

interface HeightLimitedTableContainerProps extends TableContainerProps {
  heightUnits?: number;
}

const HeightLimitedTableContainer = ({ heightUnits, style, ...rest }: HeightLimitedTableContainerProps) => {
  const theme = useTheme();
  const maxHeightStyle = { maxHeight: theme.spacing(heightUnits || 75) };
  const updatedStyle = { ...style, ...maxHeightStyle };

  return <TableContainer {...rest} style={updatedStyle} />;
};
export default HeightLimitedTableContainer;
