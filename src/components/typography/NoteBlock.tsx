import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import NoteTitle from '../typography/NoteTitle';
import DetailText from './DetailText';

interface NoteBlockProps {
  children: React.ReactNode;
}

const NoteBlock = ({ children }: NoteBlockProps) => {
  const theme = useTheme();

  return (
    <Box
      css={css`
        border: 1px solid ${theme.palette.text.secondary};
        border-radius: 4px;

        padding: ${theme.spacing(1)}px;

        @media (min-width: 600px) {
          margin-top: ${theme.spacing(2)}px;
          margin-bottom: ${theme.spacing(2)}px;
        }

        margin-top: ${theme.spacing(1)}px;
        margin-bottom: ${theme.spacing(1)}px;
      `}
    >
      <NoteTitle>Note</NoteTitle>
      <DetailText color="textSecondary" children={children} />
    </Box>
  );
};
export default NoteBlock;
