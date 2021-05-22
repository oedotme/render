import 'tailwindcss/tailwind.css'

import { Routes } from '@/config'
import { AuthProvider } from '@/context'

export function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
