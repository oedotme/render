import type { JSX } from 'react'
import { useLocation } from 'react-router'

import { useAuth } from '@/context'
import { Navigate, type Path } from '@/router'

const PRIVATE: Path[] = ['/logout']
const PUBLIC: Path[] = ['/login']

export const Redirects = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const location = useLocation()

  const authedOnPublicPath = auth.token && PUBLIC.includes(location.pathname as Path)
  const unAuthedOnPrivatePath = !auth.token && PRIVATE.includes(location.pathname as Path)

  if (authedOnPublicPath) return <Navigate to="/" replace />
  if (unAuthedOnPrivatePath) return <Navigate to="/login" replace />

  return children
}
