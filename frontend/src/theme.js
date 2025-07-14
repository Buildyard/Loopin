import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`, // your font stack
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontSize: '1rem' },
    // You can customize each variant (h1-h6, body1, subtitle1, etc.)
  },
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // your primary color
    },
    secondary: {
      main: '#dc004e', // your secondary color
    },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555',
    },
  },
});

export default theme;
