import { Link, useParams } from 'react-router-dom'

export default function CatchAll(): JSX.Element {
  const params = useParams<Record<number, string>>()

  return (
    <>
      <h1 className="font-mono text-2xl">/catch/[...all]</h1>
      <p className="mt-4 text-lg">{params?.[0]}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        back
      </Link>
    </>
  )
}
