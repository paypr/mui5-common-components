import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface EmptyTableRow extends TableCellProps {
  columnCount: number;
}

const EmptyTableRow = ({ columnCount, align, colSpan, children, ...rest }: EmptyTableRow) => (
  <TableRow>
    <TableCell {...rest} colSpan={colSpan || columnCount} align={align || 'center'}>
      {children}
    </TableCell>
  </TableRow>
);
export default EmptyTableRow;
