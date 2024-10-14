import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import Header from './components/Header/Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
