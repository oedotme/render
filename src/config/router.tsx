import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Guest, Private } from '@/layouts'
import { Dashboard, Home } from '@/pages'

type Routes = Array<{
  path: string
  page: () => JSX.Element
  layout?: ({ children }: { children: JSX.Element }) => JSX.Element
  exact?: boolean
}>

const guestRoutes: Routes = [{ path: '/', page: Home }]
const privateRoutes: Routes = [{ path: '/', page: Dashboard }]

export default function Router(): JSX.Element {
  const [authed] = useState(false)

  return (
    <BrowserRouter>
      {authed ? (
        <Switch>
          {privateRoutes.map(({ path, page: Page, layout: Layout = Private, exact = true }) => (
            <Route key={path} path={path} exact={exact}>
              <Layout>
                <Page />
              </Layout>
            </Route>
          ))}
        </Switch>
      ) : (
        <Switch>
          {guestRoutes.map(({ path, page: Page, layout: Layout = Guest, exact = true }) => (
            <Route key={path} path={path} exact={exact}>
              <Layout>
                <Page />
              </Layout>
            </Route>
          ))}
        </Switch>
      )}
    </BrowserRouter>
  )
}
