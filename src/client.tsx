import { BrowserRouter } from 'react-router-dom'
import { render, hydrate } from 'react-dom'

import { Routes } from '@/config'

function Client(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

const app = document.querySelector('#app') as Element

if (app.hasChildNodes()) hydrate(<Client />, app)
else render(<Client />, app)
