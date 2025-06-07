import { StrictMode } from 'react'
import { Routes } from '@generouted/react-router'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from '@/context'

const App = () => (
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>
)

const app = document.getElementById('app')
if (app) createRoot(app).render(<App />)
