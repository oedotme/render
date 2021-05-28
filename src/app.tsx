import 'tailwindcss/tailwind.css'

import { Routes } from '@/config'
import { AuthProvider } from '@/context'

export const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
