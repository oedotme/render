import '@/styles/layers.css'

import { Container } from '@/components'
import { AuthProvider } from '@/context'
import { Guard } from '@/config'

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
