import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Suppress tldraw license warnings in production
if (import.meta.env.PROD) {
  const originalWarn = console.warn;
  const originalLog = console.log;
  console.warn = (...args) => {
    const msg = String(args[0]);
    if (msg.includes('tldraw license') || msg.includes('purchase a license')) return;
    originalWarn(...args);
  };
  console.log = (...args) => {
    const msg = String(args[0]);
    if (msg.includes('tldraw license') || msg.includes('purchase a license') || msg.includes('----')) return;
    originalLog(...args);
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
