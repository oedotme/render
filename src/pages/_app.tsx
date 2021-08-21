import 'tailwindcss/tailwind.css'

import { Container } from '@/components'
import { AuthProvider } from '@/context'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props): JSX.Element {
  return (
    <AuthProvider>
      <Container>{children}</Container>
    </AuthProvider>
  )
}
