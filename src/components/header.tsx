import { useAuth } from '@/context'
import { Link } from '@/router'

export const Header = () => {
  const auth = useAuth()

  return (
    <header className="flex items-center justify-between">
      <ul className="flex items-center gap-4 font-mono">
        <li>
          <Link className="p-2 hover:underline" to="/">
            /home
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
