import { Link } from '@/router'

export default function Sibling() {
  return (
    <>
      <h1 className="font-mono text-2xl">/nested/slibling</h1>
      <p className="mt-4 text-lg">Using layout from `src/pages/nested.tsx`</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
