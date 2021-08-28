import { Link } from 'react-router-dom'

export default function Routing(): JSX.Element {
  return (
    <>
      <h1 className="font-mono text-2xl">/routing</h1>

      <Link className="p-2 mt-4 hover:underline" to="/nested/within">
        nested route
      </Link>

      <Link className="p-2 hover:underline" to={`/dynamic/${Date.now()}`}>
        dynamic route
      </Link>

      <Link className="p-2 hover:underline" to={`/catch/${Date.now()}/then/${Date.now()}`}>
        catch all routes
      </Link>
    </>
  )
}
