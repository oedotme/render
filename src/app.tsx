import 'tailwindcss/tailwind.css'

import { Router } from '@/config'
import { AuthProvider } from '@/context'

export function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
