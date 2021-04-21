import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Authed, Public } from '@/layouts'
import { Dashboard, Home } from '@/pages'

type Routes = {
  [key: string]: Array<{
    path: string
    page: () => JSX.Element
    layout: ({ children }: { children: JSX.Element }) => JSX.Element
    exact?: boolean
  }>
}

const routes: Routes = {
  authed: [{ path: '/', page: Dashboard, layout: Authed }],
  public: [{ path: '/', page: Home, layout: Public }],
}

export default function Router(): JSX.Element {
  const [state] = useState<'authed' | 'public'>('public')

  return (
    <BrowserRouter>
      <Switch>
        {routes[state].map(({ path, page: Page, layout: Layout, exact = true }) => (
          <Route key={path} path={path} exact={exact}>
            <Layout>
              <Page />
            </Layout>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  )
}
