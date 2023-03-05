import { Link, useParams } from '@/router'

export default function DynamicTimestamp() {
  const params = useParams('/dynamic/:timestamp')

  return (
    <>
      <h1 className="font-mono text-2xl">/dynamic/:timestamp</h1>
      <p className="mt-4 text-lg">{params.timestamp}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
