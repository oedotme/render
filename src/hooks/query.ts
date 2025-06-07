import { useEffect, useMemo, useRef, useState } from 'react'

export type Query<T> = { loading: boolean; error: boolean; data?: T }
type Options = { enabled?: boolean; cacheTime?: number }

const defaultOptions: Options = { enabled: true, cacheTime: 0 }

const cache = new Map<string, unknown>()

export const useQuery = <T>(key: string | string[], fetcher: () => Promise<T>, options?: Options): Query<T> => {
  const ref = useRef<() => Promise<T>>(undefined)

  const [status, setStatus] = useState<'stale' | 'loading' | 'error' | 'done'>('stale')
  const [data, setData] = useState<T>()

  const id = useMemo(() => (typeof key === 'string' ? key : key.join('/')), [key])
  const { enabled, cacheTime } = { ...defaultOptions, ...options }

  ref.current = fetcher

  useEffect(() => {
    if (enabled) {
      if (cacheTime === Infinity && cache.has(id)) {
        setData(cache.get(id) as T)
      } else {
        setStatus('loading')
        ref
          .current?.()
          .then((data) => {
            setData(data)
            setStatus('done')
            cache.set(id, data)
          })
          .catch(() => setStatus('error'))
      }
    }
  }, [id, enabled, cacheTime])

  return { loading: status === 'loading', error: status === 'error', data }
}
