import { Link } from 'react-router-dom'

import { Logo } from '@/assets'

export default function Header(): JSX.Element {
  return (
    <header className="flex justify-between">
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/">
            <img className="w-8 h-8 bg-gray-50 rounded-sm" src={Logo} alt="Render" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Link to="profile">profile</Link>
    </header>
  )
}
