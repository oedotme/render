import { useState } from 'react'

import { useAuth } from '@/context'

export const meta = { scope: 'public' }

export default function Login(): JSX.Element {
  const auth = useAuth()

  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const login = () => auth.login(email)

  return (
    <>
      <h1 className="font-mono text-2xl">/auth</h1>

      <div className="flex flex-col m-6 w-56">
        <input
          className="p-3 text-center border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <button
          className="bg-[#1c2954] mt-3 px-4 py-3 disabled:text-gray-600 text-white disabled:bg-gray-200 border border-black disabled:border-gray-200 rounded disabled:cursor-not-allowed"
          onClick={login}
          disabled={!email}
        >
          Login
        </button>
      </div>
    </>
  )
}
