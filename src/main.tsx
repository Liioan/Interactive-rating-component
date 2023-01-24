import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateInfoProvider } from './context/StateInfoContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateInfoProvider>
      <App />
    </StateInfoProvider>
  </React.StrictMode>
);
