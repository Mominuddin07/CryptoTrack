import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CryptoContextProvider } from './cryptocontext'; // Correct import
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoContextProvider> {/* Wrap App with the provider */}
      <App />
    </CryptoContextProvider>
  </React.StrictMode>
);
