import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'

import { AuthProvider } from '@/context'

const App = () => (
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>
)

const app = document.getElementById('app')!
createRoot(app).render(<App />)
