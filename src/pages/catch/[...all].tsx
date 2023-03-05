import { useParams } from 'react-router-dom'

import { Link } from '@/router'

export default function CatchAll() {
  const { '*': all } = useParams()

  return (
    <>
      <h1 className="font-mono text-2xl">/catch/*</h1>
      <p className="mt-4 text-lg">{all}</p>
      <Link className="mt-4 p-2 hover:underline" to="/routing">
        ⟵
      </Link>
    </>
  )
}
