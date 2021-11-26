import { useParams } from 'react-router-dom'

import { Link } from '@/components'

export default function DynamicTimestamp(): JSX.Element {
  const { timestamp } = useParams<{ timestamp: string }>()

  return (
    <>
      <h1 className="font-mono text-2xl">/dynamic/:timestamp</h1>
      <p className="mt-4 text-lg">{timestamp}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
