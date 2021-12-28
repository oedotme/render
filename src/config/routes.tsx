import { Fragment } from 'react'
import { Outlet, ReactLocation, Route, Router } from 'react-location'

const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx')
const ROUTES = import.meta.glob('/src/pages/**/[a-z[]*.tsx')

const preservedRoutes: Partial<Record<string, () => JSX.Element>> = Object.keys(PRESERVED).reduce((routes, key) => {
  const path = key.replace(/\/src\/pages\/|\.tsx$/g, '')
  return { ...routes, [path]: PRESERVED[key]?.default }
}, {})

const regularRoutes: Route[] = Object.keys(ROUTES).map((key) => {
  const route = ROUTES[key]
  const path = key
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return {
    path,
    element: () => route().then((mod) => (mod?.default ? <mod.default /> : <Fragment />)),
    loader: (...args) => route().then((mod) => mod?.loader?.(...args)),
  }
})

const App = preservedRoutes?.['_app'] || Fragment
const NotFound = preservedRoutes?.['404'] || Fragment

const location = new ReactLocation()
export const routes = [...regularRoutes, { path: '*', element: <NotFound /> }]

export const Routes = () => {
  return (
    <Router location={location} routes={routes}>
      <App>
        <Outlet />
      </App>
    </Router>
  )
}
