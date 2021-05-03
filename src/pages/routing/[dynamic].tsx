import { Link, useParams } from 'react-router-dom'

export default function RoutingDynamic(): JSX.Element {
  const { dynamic } = useParams<{ dynamic: string }>()

  return (
    <>
      <h1 className="font-mono text-2xl">/routing/[dynamic]</h1>
      <p className="mt-4 text-lg">{dynamic}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        back
      </Link>
    </>
  )
}
