import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'

import { Router } from '@/config'

function App() {
  return <Router />
}

render(<App />, document.querySelector('#app'))
