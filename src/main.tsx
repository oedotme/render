import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'

const App = () => (
  <StrictMode>
    <Routes />
  </StrictMode>
)

const app = document.getElementById('app')!
createRoot(app).render(<App />)
