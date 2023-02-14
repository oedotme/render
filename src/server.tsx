import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { Routes } from './routes.gen'

export const render = async (url: string): Promise<string> => {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Routes />
      </StaticRouter>
    </StrictMode>
  )
}
