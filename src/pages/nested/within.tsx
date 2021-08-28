import { Link } from 'react-router-dom'

export default function NestedWithin(): JSX.Element {
  return (
    <>
      <h1 className="font-mono text-2xl">/nested/within</h1>
      <p className="mt-4 text-lg">here</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
