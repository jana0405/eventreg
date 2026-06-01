import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This BrowserRouter is the master switch that makes your links work! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)