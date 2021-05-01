import { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { useAuth } from '@/context'
import { Private, Public } from '@/layouts'
import { Dashboard, Home } from '@/pages'

type Routes = {
  [key in 'private' | 'public']: Array<{
    path: string
    page: () => JSX.Element
    layout?: ({ children }: { children: JSX.Element }) => JSX.Element
    exact?: boolean
  }>
}

const routes: Routes = {
  private: [{ path: '/', page: Dashboard, layout: Private }],
  public: [{ path: '/', page: Home, layout: Public }],
}

export default function Router(): JSX.Element {
  const auth = useAuth()

  const status = auth.token ? 'private' : 'public'

  return (
    <BrowserRouter>
      <Switch>
        {routes[status].map(({ path, page: Page, layout: Layout = Fragment, exact = true }) => (
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
