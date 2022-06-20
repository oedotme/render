import '@/styles/layers.css'

import { Container } from '@/components'
import { Guard } from '@/config'
import { AuthProvider } from '@/context'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return (
    <AuthProvider>
      <Guard>
        <Container>{children}</Container>
      </Guard>
    </AuthProvider>
  )
}
