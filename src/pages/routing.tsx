import { LoaderFn, MakeGenerics, useMatch } from 'react-location'

import { Link } from '@/components'

type Route = MakeGenerics<{ LoaderData: { name: string } }>

export const loader: LoaderFn<Route> = async () => {
  return await Promise.resolve({ name: '/routing' })
}

export default function Routing() {
  const { data } = useMatch<Route>()

  return (
    <>
      <h1 className="font-mono text-2xl">{data.name}</h1>

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
