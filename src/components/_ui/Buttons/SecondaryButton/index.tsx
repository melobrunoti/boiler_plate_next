import { Button } from '@mui/material';
import React from 'react';
import { IPropsSecundaryButton } from './types';

export default function SecondaryButton({
  children,
  width,
  height,
  callback,
}: IPropsSecundaryButton) {
  return (
    <Button
      sx={{
        width: width ? width : '100%',
        height: height ? height : '40px',
        borderRadius: '6px',
        boxShadow: 'none',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        letterSpacing: '-0.15px',
        lineHeight: '19.5px',
        fontWeight: 600,
        textTransform: 'none',
        border: '1px solid var(--secondary-border-color)',
        backgroundColor: 'var(--secondary-bg-color)',
        color: 'var(--secondary-text-color)',
        '&:hover': {
          backgroundColor: 'var(--secondary-bg-color)',
        },
      }}
      onClick={callback}
      variant="contained"
    >
      {children}
    </Button>
  );
}
