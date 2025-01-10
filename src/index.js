import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));  // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
