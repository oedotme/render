import { useLoaderData } from 'react-router'

import { Link } from '@/router'

export const Loader = () => {
  return Promise.resolve({ name: '/routing' })
}

const date = () => Date.now()

export default function Routing() {
  const data = useLoaderData<{ name: string }>()

  return (
    <>
      <h1 className="font-mono text-2xl">{data.name}</h1>

      <Link className="p-2 hover:underline" to="/dynamic/:timestamp" params={{ timestamp: String(date()) }}>
        dynamic route
      </Link>

      <Link className="p-2 hover:underline" to={`/catch/*`} params={{ '*': `${date()}/then/${date()}` }}>
        catch all routes
      </Link>

      <Link className="p-2 hover:underline" to="/nested">
        nested layouts
      </Link>
    </>
  )
}
