import '@/styles/layers.css'

import { Outlet } from 'react-router-dom'

import { Container } from '@/components'
import { Guard } from '@/config'
import { AuthProvider } from '@/context'

export default function App() {
  return (
    <AuthProvider>
      <Guard>
        <Container>
          <Outlet />
        </Container>
      </Guard>
    </AuthProvider>
  )
}
