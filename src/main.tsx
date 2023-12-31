import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './styles/fahrschule.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/informationen.css'
import './styles/über.css'
import './styles/anmelden.css'
import './styles/links.css'
import './styles/kontakt.css'
import './styles/datenschutz.css'
import './styles/impressum.css'
import 'react-slideshow-image/dist/styles.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
