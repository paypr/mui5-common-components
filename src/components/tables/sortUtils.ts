import * as React from 'react';

export type Order = 'asc' | 'desc';

const ascendingKeyComparator = <T extends any>(a: T, b: T, orderBy: keyof T) =>
  ascendingComparator(a[orderBy], b[orderBy]);

export const ascendingComparator = <T extends any>(a: T, b: T) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const getComparator = <T extends any>(order: Order, orderBy: keyof T): ((a: T, b: T) => number) =>
  order === 'asc' ? (a, b) => ascendingKeyComparator(a, b, orderBy) : (a, b) => -ascendingKeyComparator(a, b, orderBy);

export const stableSort = <T extends any>(array: readonly T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export type OnRequestSort<T> = (event: React.MouseEvent<unknown>, property: keyof T) => void;

export const useSorting = <T>(initialOrderBy: keyof T, initialOrder?: Order) => {
  const [order, updateOrder] = React.useState<Order>(initialOrder || 'asc');
  const [orderBy, updateOrderBy] = React.useState<keyof T>(initialOrderBy);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === 'asc';
    updateOrder(isAsc ? 'desc' : 'asc');
    updateOrderBy(property);
  };

  return {
    order,
    updateOrder,
    orderBy,
    updateOrderBy,
    handleRequestSort,
  };
};

export const createSortHandler =
  <T>(property: keyof T, onRequestSort: OnRequestSort<T>) =>
  (event: React.MouseEvent<unknown>) =>
    onRequestSort(event, property);
