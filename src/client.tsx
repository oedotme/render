import { hydrate, render } from 'react-dom'
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

if (app.hasChildNodes()) hydrate(<Client />, app)
else render(<Client />, app)
