import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Guard } from '@/components'

const files = import.meta.globEager(`../pages/**/*.tsx`)

const paths = { '/404': '*' }

const routes = Object.keys(files)
  .reverse()
  .map((file) => {
    const path = file.replace(/\.\.\/pages|index|\.tsx$/g, '').replace(/\[(.+)\]/, ':$1')

    return {
      path: path in paths ? paths[path as keyof typeof paths] : path,
      component: files[file].default as () => JSX.Element,
      scope: files[file].meta?.scope as 'private' | 'public',
    }
  })

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      {routes.map(({ path, component: Component = Fragment, scope }) => (
        <Route key={path} path={path} exact={true}>
          <Guard scope={scope}>
            <Component />
          </Guard>
        </Route>
      ))}
    </Switch>
  )
}
