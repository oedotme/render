import { Redirect } from 'react-router-dom'

import { useAuth } from '@/context'

type Props = {
  scope: 'private' | 'public'
  children: JSX.Element
}

export const Guard = ({ scope, children }: Props): JSX.Element => {
  const auth = useAuth()

  if (scope === 'private' && !auth.token) return <Redirect to="/login" />
  if (scope === 'public' && auth.token) return <Redirect to="/" />

  return <>{children}</>
}
