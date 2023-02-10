import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import * as React from 'react';
import { createSortHandler, OnRequestSort, Order } from './sortUtils';

export interface SimpleSortingTableHeadProps<T> {
  headings: SimpleSortingTableHeadCell<T>[];
  order: Order;
  orderBy: keyof T;
  hasExpandCollapse?: boolean;
  hasAction?: boolean;
  onRequestSort: OnRequestSort<T>;
}

export interface SimpleSortingTableHeadCell<T> {
  key: keyof T;
  label: React.ReactNode;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

const SimpleSortingTableHead = ({
  headings,
  order,
  orderBy,
  hasExpandCollapse,
  hasAction,
  onRequestSort,
}: SimpleSortingTableHeadProps<any>) => {
  return (
    <TableHead>
      <TableRow>
        {hasExpandCollapse ? <TableCell>&nbsp;</TableCell> : null}
        {headings.map(({ key, label, align }: SimpleSortingTableHeadCell<any>) => (
          <TableCell key={key.toString()} align={align} sortDirection={orderBy === key ? order : false}>
            <TableSortLabel
              active={orderBy === key}
              direction={orderBy === key ? order : 'asc'}
              onClick={createSortHandler(key, onRequestSort)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
        {hasAction ? <TableCell>&nbsp;</TableCell> : null}
      </TableRow>
    </TableHead>
  );
};
export default SimpleSortingTableHead;
