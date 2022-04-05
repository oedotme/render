import { Link } from '@/components'

export default function NestedIndex() {
  return (
    <>
      <h1 className="font-mono text-2xl">/nested</h1>
      <p className="mt-4 text-lg">Using layout from `src/pages/nested.tsx`</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
