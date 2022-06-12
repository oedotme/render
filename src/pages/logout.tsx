import { useAuth } from '@/context'

export default function Logout() {
  const auth = useAuth()

  const logout = () => auth.logout()

  return (
    <>
      <h1 className="font-mono text-2xl">/auth</h1>

      <div className="m-6 flex w-56 flex-col">
        <p className="border border-white p-3 text-center font-mono">{auth.user?.email}</p>
        <button className="mt-3 rounded border border-black bg-[#1c2954] p-3 px-4 text-white" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  )
}
