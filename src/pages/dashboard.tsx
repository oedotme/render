import { useAuth } from '@/context'

export default function Dashboard(): JSX.Element {
  const auth = useAuth()

  const logout = () => auth.logout()

  return (
    <>
      <h1 className="text-2xl">This is the dashboard page</h1>

      <div className="mt-3">
        <span>{auth.user?.email}</span>
        <button className="mx-3 p-2 px-4 text-white bg-black disabled:bg-gray-200 border border-black" onClick={logout}>
          Switch to public routes
        </button>
      </div>
    </>
  )
}
