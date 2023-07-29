import { Button } from '@/components'
import { useAuth } from '@/context'

export default function Logout() {
  const auth = useAuth()

  const logout = () => auth.logout()

  return (
    <>
      <h1 className="font-mono text-2xl">/auth</h1>

      <div className="m-6 flex w-56 flex-col">
        <p className="border border-white p-3 text-center font-mono">{auth.user?.email}</p>

        <Button className="mt-3" onClick={logout}>
          Logout
        </Button>
      </div>
    </>
  )
}
