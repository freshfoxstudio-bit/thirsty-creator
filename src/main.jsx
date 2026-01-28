import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional, include if you have CSS

// Create root and render your app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
