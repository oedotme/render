import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'

import { Router } from '@/config'
import { AuthProvider } from '@/context'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

render(<App />, document.querySelector('#app'))
