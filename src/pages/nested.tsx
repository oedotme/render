import { Link } from '@/components'
import { Outlet } from 'react-location'

export default function Nested() {
  return (
    <>
      <h1 className="font-mono text-2xl">/nested</h1>
      <div className="mt-4 flex flex-col items-center gap-8">
        <ul className="flex gap-4 font-mono">
          <li>
            <Link className="mt-4 p-2 hover:underline" to="/nested">
              /index
            </Link>
          </li>
          <li>
            <Link className="mt-4 p-2 hover:underline" to="/nested/child">
              /child
            </Link>
          </li>
          <li>
            <Link className="mt-4 p-2 hover:underline" to="/nested/sibling">
              /sibling
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  )
}
