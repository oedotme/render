import { Link } from '@/router'

export default function NotFound() {
  return (
    <>
      <h1 className="font-mono text-2xl">/404</h1>
      <p className="mt-4 text-lg">page not found</p>
      <Link className="mt-4 p-2 hover:underline" to="/">
        go home
      </Link>
    </>
  )
}
