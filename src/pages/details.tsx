import { useAuth } from '@/context'

export default function Details(): JSX.Element {
  const auth = useAuth()

  const logout = () => auth.logout()

  return (
    <>
      <h1 className="font-mono text-2xl">/routes</h1>

      <div className="m-6">
        <p className="p-3 text-center font-mono border border-white">{auth.user?.email}</p>
        <button className="bg-[#1c2954] mt-3 p-3 px-4 text-white border border-black rounded" onClick={logout}>
          Switch to public routes
        </button>
      </div>
    </>
  )
}
