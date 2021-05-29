import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app'

function Client(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const app = document.querySelector('#app') as Element

if (app.hasChildNodes()) hydrate(<Client />, app)
else render(<Client />, app)
