import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticRouterProps } from 'react-router-dom'

import { App } from '@/app'

export const render = (location: StaticRouterProps['location'], context: StaticRouterProps['context']): string => {
  return renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )
}
