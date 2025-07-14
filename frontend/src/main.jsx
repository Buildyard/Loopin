import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './ErrorBoundary.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </BrowserRouter>
    </ThemeProvider>
    </ErrorBoundary>,
)
