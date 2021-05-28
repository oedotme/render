import { Redirect } from 'react-router'

import { useAuth } from '@/context'
import { Shared } from '@/layouts'

type Props = {
  children: JSX.Element
}

export const Public = ({ children }: Props): JSX.Element => {
  const auth = useAuth()

  if (auth.token) return <Redirect to="/" />

  return <Shared>{children}</Shared>
}
