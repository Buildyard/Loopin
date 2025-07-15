import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`, // base fallback
    h1: {
      fontFamily: `'Manufacturing Consent'`,
      fontWeight: 300,
    },
    h2: {
      fontFamily: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
    },
    h3: {
      fontFamily: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
    },
    h4: {
      fontFamily: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
    },
    h5: {
      fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
    },
    h6: {
      fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
    },
    body1: {
      fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
      fontWeight: 300,
      fontSize: '1rem',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
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
