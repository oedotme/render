import { createRoot, hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from '@/config'

function Client(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

const app = document.querySelector('#app') as Element
const root = createRoot(app)

if (app.hasChildNodes()) hydrateRoot(app, <Client />)
else root.render(<Client />)
