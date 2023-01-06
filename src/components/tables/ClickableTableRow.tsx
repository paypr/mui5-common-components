import styled from '@emotion/styled';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import * as React from 'react';
import { changePointerWhenClickableStyle } from '../style/utils';

const StyledTableRow = styled(TableRow)`
  ${({ onClick }: TableRowProps) => changePointerWhenClickableStyle(onClick)}
`;

const ClickableTableRow = ({ hover, onClick, ...rest }: TableRowProps) => (
  <StyledTableRow {...rest} hover={hover || Boolean(onClick)} onClick={onClick} />
);
export default ClickableTableRow;
