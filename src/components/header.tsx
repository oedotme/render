import { Link } from 'react-router-dom'

import { Logo } from '@/assets'
import { useAuth } from '@/context'

export default function Header(): JSX.Element {
  const auth = useAuth()

  return (
    <header className="flex items-center justify-between">
      <ul className="flex gap-4 items-center font-mono">
        <li>
          <Link to="/">
            <img className="w-8 h-8 bg-gray-50 rounded-sm" src={Logo} alt="Render" />
          </Link>
        </li>

        {auth.token ? (
          <li>
            <Link className="p-2 hover:underline" to="/logout">
              /auth
            </Link>
          </li>
        ) : (
          <li>
            <Link className="p-2 hover:underline" to="/login">
              /auth
            </Link>
          </li>
        )}

        <li>
          <Link className="p-2 hover:underline" to="/routing">
            /routing
          </Link>
        </li>
      </ul>

      {auth.token && (
        <span className="opacity-50" role="img" aria-label="private">
          🔒
        </span>
      )}
    </header>
  )
}
