import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory, ReactLocation, RouterInstance } from 'react-location'

import { Routes, routes } from '@/config'

export const render = async (url: string): Promise<string> => {
  const history = createMemoryHistory({ initialEntries: [url] })
  const location = new ReactLocation({ history })
  const router = new RouterInstance({ location, routes })
  await router.updateLocation(location.current).promise

  return renderToString(
    <StrictMode>
      <Routes />
    </StrictMode>
  )
}
