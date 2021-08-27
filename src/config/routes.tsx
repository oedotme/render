import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Guard } from '@/components'

const PRESERVED = import.meta.globEager('../pages/(404|_app).tsx')
const ROUTES = import.meta.globEager('../pages/**/[a-z[]*.tsx')

const preserved: Record<string, () => JSX.Element> = Object.keys(PRESERVED).reduce((preserved, file) => {
  const path = file.replace(/..\/pages|\.tsx$/g, '')
  return { ...preserved, [path]: PRESERVED[file].default as () => JSX.Element }
}, {})

const routes = Object.keys(ROUTES).map((file) => {
  const path = file
    .replace(/..\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return {
    path,
    component: ROUTES[file].default as () => JSX.Element,
    scope: ROUTES[file]?.meta?.scope as 'private' | 'public',
  }
})

export const Routes = (): JSX.Element => {
  const App = '/_app' in preserved ? preserved['/_app'] : Fragment
  const NotFound = '/404' in preserved ? preserved['/404'] : Fragment

  return (
    <App>
      <Switch>
        {routes.map(({ path, component: Component = Fragment, scope }) => (
          <Route key={path} path={path} exact={true}>
            <Guard scope={scope}>
              <Component />
            </Guard>
          </Route>
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  )
}
