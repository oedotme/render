import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticRouterProps } from 'react-router-dom/server'

import { Routes } from '@/config'

export const render = (location: StaticRouterProps['location']): string => {
  return renderToString(
    <StaticRouter location={location}>
      <Routes />
    </StaticRouter>
  )
}
