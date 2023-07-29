import { Header } from '@/components'

type Props = {
  children: JSX.Element
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col p-6 text-default">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">{children}</main>
    </div>
  )
}
