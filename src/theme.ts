import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b89f5a', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#222',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#111',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
