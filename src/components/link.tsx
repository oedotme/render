import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

import { routes } from '@/config'

const getMatchingRoute = (path: string) => {
  const dynamicSegments = /:\w+|\*/g
  return routes.find((route) => path.match(new RegExp(route.path.replace(dynamicSegments, '.*')))?.[0] === path)
}

type Props = LinkProps & { prefetch?: boolean }

export const Link = ({ children, to, prefetch = true, ...props }: Props): JSX.Element => {
  const [prefetched, setPrefetched] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)

  const internal = String(to).startsWith('/')
  const route = useMemo(() => getMatchingRoute(to as string), [to])
  const preload = useCallback(() => route?.preload() && setPrefetched(true), [route])
  const prefetchable = Boolean(internal && route && !prefetched)

  useEffect(() => {
    if (prefetchable && prefetch && ref?.current) {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && preload()),
        { rootMargin: '200px' }
      )

      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [prefetch, prefetchable, preload])

  const handleMouseEnter = () => prefetchable && preload()

  if (internal) {
    return (
      <RouterLink ref={ref} to={to} onMouseEnter={handleMouseEnter} {...props}>
        {children}
      </RouterLink>
    )
  }

  return (
    <a href={String(to)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
