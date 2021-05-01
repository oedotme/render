import { useState } from 'react'

import { useAuth } from '@/context'

export default function Home(): JSX.Element {
  const auth = useAuth()

  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const login = () => auth.login('user@mail.com')

  return (
    <>
      <h1 className="text-2xl">This is the home page</h1>

      <div className="mt-3">
        <input className="p-2 border" type="email" placeholder="email" value={email} onChange={handleChange} />
        <button
          className="mx-3 p-2 px-4 disabled:text-gray-600 text-white bg-black disabled:bg-gray-200 border border-black disabled:border-gray-200 disabled:cursor-not-allowed"
          onClick={login}
          disabled={!email}
        >
          Switch to private routes
        </button>
      </div>
    </>
  )
}
