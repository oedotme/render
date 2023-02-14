import { Link } from 'react-router-dom'

export default function Child() {
  return (
    <>
      <h1 className="font-mono text-2xl">/nested/child</h1>
      <p className="mt-4 text-lg">Using layout from `src/pages/nested.tsx`</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
