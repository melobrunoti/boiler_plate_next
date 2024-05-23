import { Button } from '@mui/material';
import React from 'react';

export default function SecondaryButton({
  text,
  width,
  height,
  callback,
}: any) {
  return (
    <Button
      sx={{
        width: width ? width : '100%',
        height: height ? height : '40px',
        borderRadius: '6px',
        boxShadow: 'Capitalize',
        fontSize: '16px',
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
      {text}
    </Button>
  );
}
