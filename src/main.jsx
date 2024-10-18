import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import { ThemeProvider } from './components/Theme/ThemeContext.jsx'
//import Footer from './components/Footer/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider >
    <App />
    </ThemeProvider>
  </StrictMode>,
)
