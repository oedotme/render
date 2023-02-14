import { useLoaderData } from 'react-router-dom'

import { Link } from '@/routes.gen'

export const Loader = () => {
  return Promise.resolve({ name: '/routing' })
}

export default function Routing() {
  const data = useLoaderData() as { name: string }

  return (
    <>
      <h1 className="font-mono text-2xl">{data.name}</h1>

      <Link className="p-2 hover:underline" to="/dynamic/:timestamp" params={{ timestamp: String(Date.now()) }}>
        dynamic route
      </Link>

      <Link className="p-2 hover:underline" to={`/catch/${Date.now()}/then/${Date.now()}`}>
        catch all routes
      </Link>

      <Link className="p-2 hover:underline" to="/nested">
        nested layouts
      </Link>
    </>
  )
}
