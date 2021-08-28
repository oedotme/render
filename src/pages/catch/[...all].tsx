import { Link, useParams } from 'react-router-dom'

export default function CatchAll(): JSX.Element {
  const { 0: all } = useParams<Record<number, string>>()

  return (
    <>
      <h1 className="font-mono text-2xl">/catch/[...all]</h1>
      <p className="mt-4 text-lg">{all}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
