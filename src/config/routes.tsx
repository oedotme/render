import { Fragment, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Guard } from '@/config'

const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx')
const ROUTES = import.meta.glob('/src/pages/**/[a-z[]*.tsx')

const preserved: Partial<Record<'_app' | '404', Component>> = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
  return { ...preserved, [key]: PRESERVED[file].default as Component }
}, {})

type LazyComponent = () => Promise<{ default: () => JSX.Element }>

export const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, component: lazy(ROUTES[route] as LazyComponent), preload: ROUTES[route] }
})

export const Routes = (): JSX.Element => {
  const App = preserved?.['_app'] || Fragment
  const NotFound = preserved?.['404'] || Fragment

  return (
    <App>
      <Suspense fallback={'Loading...'}>
        <Switch>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} exact={true}>
              <Guard path={path}>
                <Component />
              </Guard>
            </Route>
          ))}

          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </App>
  )
}
