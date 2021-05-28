import 'tailwindcss/tailwind.css'

import { Routes } from '@/config'
import { AuthProvider } from '@/context'
import { Main } from '@/layouts'

export const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <Main>
        <Routes />
      </Main>
    </AuthProvider>
  )
}
