import { Button } from '@mui/material';
import React from 'react';

export default function PrimaryButton({
  text,
  width,
  height,
  callback,
  type,
}: any) {
  return (
    <Button
      sx={{
        fontSize: '12px',
        fontFamily: 'Montserrat',
        letterSpacing: '-0.15px',
        lineHeight: '19.5px',
        fontWeight: 600,
        textTransform: 'none',
        width: width ? width : '100%',
        height: height ? height : '40px',
        borderColor: 'var(--primary-bg-color)',
        backgroundColor: 'var(--primary-bg-color)',
        color: 'var(--primary-text-color)',
        '&:hover': {
          backgroundColor: 'var(--primary-bg-color)',
        },
      }}
      type={type ? type : 'button'}
      onClick={callback}
      variant="contained"
    >
      {text}
    </Button>
  );
}
