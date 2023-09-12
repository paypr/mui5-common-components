import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import React from 'react';
import { DefaultTextFieldProps } from './DefaultTextField';

type NumberFieldProps = DefaultTextFieldProps & {
  min?: number;
  max?: number;
  allowWheel?: boolean;
};

const NumberField = ({ type, min, max, InputProps, allowWheel, onWheel, ...rest }: NumberFieldProps) => {
  const { inputProps, ...restInputProps } = { ...InputProps };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (!allowWheel) {
      e.preventDefault();
    }

    if (onWheel) {
      onWheel(e);
    }
  };

  return (
    <TextField
      {...rest}
      css={css`
        & .muiinputbase-input {
          text-align: right;
        }
      `}
      type={type || 'number'}
      InputProps={{
        ...restInputProps,
        inputProps: { ...inputProps, min, max },
      }}
      onWheel={handleWheel}
    />
  );
};
export default NumberField;
