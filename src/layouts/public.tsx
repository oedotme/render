import { Link } from 'react-router-dom'

import { Logo } from '@/assets'

type Props = {
  children: JSX.Element
}

export default function Guest({ children }: Props): JSX.Element {
  return (
    <>
      <header className="p-6">
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="Render" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>

      <main className="p-6">{children}</main>
    </>
  )
}
