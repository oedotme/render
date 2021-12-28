import 'tailwindcss/tailwind.css'

import { Container } from '@/components'
import { AuthProvider } from '@/context'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return (
    <AuthProvider>
      <Container>{children}</Container>
    </AuthProvider>
  )
}
