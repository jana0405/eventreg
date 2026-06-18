import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This BrowserRouter is the master switch that makes your links work! */}
      <App />
  </StrictMode>,
)