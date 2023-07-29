import '@/styles/layers.css'

import { Outlet } from 'react-router-dom'

import { Redirects } from '@/config'
import { useAuth } from '@/context'
import { Link } from '@/router'

export default function App() {
  const auth = useAuth()

  return (
    <Redirects>
      <div className="flex min-h-screen flex-col p-6 text-default">
        <header className="flex items-center justify-between">
          <nav className="flex items-center gap-4 font-mono">
            <Link className="p-2 hover:underline" to="/">
              /home
            </Link>

            {auth.token ? (
              <Link className="p-2 hover:underline" to="/logout">
                /auth
              </Link>
            ) : (
              <Link className="p-2 hover:underline" to="/login">
                /auth
              </Link>
            )}

            <Link className="p-2 hover:underline" to="/routing">
              /routing
            </Link>
          </nav>

          {auth.token ? <span className="opacity-50">🔒</span> : null}
        </header>

        <main className="flex flex-1 flex-col items-center justify-center">
          <Outlet />
        </main>
      </div>
    </Redirects>
  )
}
