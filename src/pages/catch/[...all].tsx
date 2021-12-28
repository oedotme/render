import { MakeGenerics, useMatch } from 'react-location'

import { Link } from '@/components'

type Route = MakeGenerics<{ Params: { '*': string } }>

export default function CatchAll() {
  const { params } = useMatch<Route>()

  return (
    <>
      <h1 className="font-mono text-2xl">/catch/*</h1>
      <p className="mt-4 text-lg">{params['*']}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
