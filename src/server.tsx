import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticRouterProps } from 'react-router-dom'

import { Routes } from '@/config'

export const render = (location: StaticRouterProps['location'], context: StaticRouterProps['context']): string => {
  return renderToString(
    <StaticRouter location={location} context={context}>
      <Routes />
    </StaticRouter>
  )
}
