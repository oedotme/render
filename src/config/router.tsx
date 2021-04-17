import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Dashboard, Home } from '@/pages'

type Routes = Array<{
  path: string
  page: () => JSX.Element
  layout?: () => JSX.Element
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
          {privateRoutes.map(({ path, page: Page, exact = true }) => (
            <Route key={path} path={path} exact={exact}>
              <Page />
            </Route>
          ))}
        </Switch>
      ) : (
        <Switch>
          {guestRoutes.map(({ path, page: Page, exact = true }) => (
            <Route key={path} path={path} exact={exact}>
              <Page />
            </Route>
          ))}
        </Switch>
      )}
    </BrowserRouter>
  )
}
