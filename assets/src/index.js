import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';

const createElem = document.getElementById('root');
const root = createRoot(createElem);


root.render(
  <StrictMode>
    <AuthProvider>      
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProvider>
  </StrictMode>
);


