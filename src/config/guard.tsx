import { Redirect } from 'react-router-dom'

import { useAuth } from '@/context'

const PRIVATE = ['/logout']
const PUBLIC = ['/login']

type Props = {
  path: string
  children: JSX.Element
}

export const Guard = ({ path, children }: Props): JSX.Element => {
  const auth = useAuth()

  if (PRIVATE.includes(path) && !auth.token) return <Redirect to="/login" />
  if (PUBLIC.includes(path) && auth.token) return <Redirect to="/" />

  return <>{children}</>
}
