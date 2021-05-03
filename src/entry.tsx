import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
)
