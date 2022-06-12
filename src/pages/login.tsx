import { useState } from 'react'

import { useAuth } from '@/context'

export default function Login() {
  const auth = useAuth()

  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const login = () => auth.login(email)

  return (
    <>
      <h1 className="font-mono text-2xl">/auth</h1>

      <div className="m-6 flex w-56 flex-col">
        <input
          className="rounded border p-3 text-center"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <button
          className="mt-3 rounded border border-black bg-[#1c2954] px-4 py-3 text-white disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-600"
          onClick={login}
          disabled={!email}
        >
          Login
        </button>
      </div>
    </>
  )
}
