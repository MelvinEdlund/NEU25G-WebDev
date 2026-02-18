import { StrictMode } from 'react'

//Här används react-dom paketet för att göra kopplingen till webbsidan.
//React dom hanterar den virtuella dom:en som React arbetar med.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Här kopplar vi appen till root diven som finns i index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
