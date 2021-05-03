import { Link } from 'react-router-dom'

export default function Routing(): JSX.Element {
  return (
    <>
      <h1 className="font-mono text-2xl">/routing</h1>

      <Link className="p-2 hover:underline" to={`/routing/${Date.now()}`}>
        go to dynamic route
      </Link>
    </>
  )
}
