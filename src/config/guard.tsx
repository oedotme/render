import { Navigate } from 'react-router-dom'

import { useAuth } from '@/context'

const PRIVATE = ['/logout']
const PUBLIC = ['/login']

type Props = {
  path: string
  children: JSX.Element
}

export const Guard = ({ path, children }: Props): JSX.Element => {
  const auth = useAuth()

  if (PRIVATE.includes(path) && !auth.token) return <Navigate to="/login" replace />
  if (PUBLIC.includes(path) && auth.token) return <Navigate to="/" replace />

  return <>{children}</>
}
