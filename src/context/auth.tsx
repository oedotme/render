import { createContext, useContext, useMemo, useState } from 'react'

import { storage } from '@/utils'

type User = { email: string }

type AuthContext = {
  token: string
  user?: User
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>(() => storage.get('token') || '')
  const [user, setUser] = useState<AuthContext['user']>(() => storage.get('user') || undefined)

  const value = useMemo(
    () => ({
      token,
      user,
      login: (email: string) => {
        setToken('token'), storage.set('token', 'a0731ae631bc01dea99f13b3f8ed48fc')
        setUser({ email }), storage.set('user', { email })
      },
      logout: () => {
        setToken(''), storage.remove('token')
        setUser(undefined), storage.remove('user')
      },
    }),
    [token, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext)
  if (!context) throw Error('useAuth should be used within <AuthProvider />')
  return context
}
