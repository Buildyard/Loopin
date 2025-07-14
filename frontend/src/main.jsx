import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './ErrorBoundary.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
    <BrowserRouter>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </BrowserRouter>
    </ErrorBoundary>,
)
