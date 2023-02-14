import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import { Routes } from './routes.gen'

function Client() {
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  )
}

const app = document.getElementById('app') as Element
const root = createRoot(app)

if (app.hasChildNodes()) hydrateRoot(app, <Client />)
else root.render(<Client />)
