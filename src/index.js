import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { GlobalStyles } from './app/styleGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

