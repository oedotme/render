import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { useAuth } from '@/context'
import { Private, Public } from '@/layouts'
import { Details, Home, Info } from '@/pages'

type Routes = {
  [key in 'private' | 'public']: Array<{
    path: string
    page: () => JSX.Element
    layout?: ({ children }: { children: JSX.Element }) => JSX.Element
    exact?: boolean
  }>
}

const routes: Routes = {
  private: [
    { path: '/', page: Home, layout: Private },
    { path: '/routes', page: Details, layout: Private },
    { path: '*', page: Home, layout: Private },
  ],
  public: [
    { path: '/', page: Home, layout: Public },
    { path: '/routes', page: Info, layout: Public },
    { path: '*', page: Home, layout: Public },
  ],
}

export default function Router(): JSX.Element {
  const auth = useAuth()

  const status = auth.token ? 'private' : 'public'

  return (
    <Switch>
      {routes[status].map(({ path, page: Page, layout: Layout = Fragment, exact = true }) => (
        <Route key={path} path={path} exact={exact}>
          <Layout>
            <Page />
          </Layout>
        </Route>
      ))}
    </Switch>
  )
}
