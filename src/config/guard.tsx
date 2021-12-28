import { Navigate } from 'react-location'

import { useAuth } from '@/context'

const PRIVATE = ['/logout']
const PUBLIC = ['/login']

type Props = {
  path: string
  children: JSX.Element
}

export const Guard = ({ path, children }: Props) => {
  const auth = useAuth()

  if (PRIVATE.includes(path) && !auth.token) return <Navigate to="/login" replace />
  if (PUBLIC.includes(path) && auth.token) return <Navigate to="/" replace />

  return <>{children}</>
}
