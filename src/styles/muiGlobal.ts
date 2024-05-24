
import { createTheme } from '@mui/material/styles';

 export const theme = createTheme({
    palette: {
        primary: {
          main: '#0052cc',
        },
        secondary: {
          main: '#edf2ff',
        },
      },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '12px',
            fontFamily: 'Montserrat',
            letterSpacing: '-0.15px',
            lineHeight: '19.5px',
            fontWeight: 600,
            textTransform: 'none',
            padding: '10px 20px',
          },
        },
      },
    },
});
