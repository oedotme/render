import { useEffect, useRef, useState } from 'react'

export type Query<T> = { loading: boolean; error: boolean; data?: T }

const defaultOptions = { enabled: true }

export const useQuery = <T>(key: string | string[], fetcher: () => Promise<T>, options = defaultOptions): Query<T> => {
  const ref = useRef<() => Promise<T>>()

  const [status, setStatus] = useState<'stale' | 'loading' | 'error' | 'done'>('stale')
  const [data, setData] = useState<T>()

  const id = typeof key === 'string' ? key : key.join('#')

  ref.current = fetcher

  useEffect(() => {
    if (options?.enabled) {
      setStatus('loading')
      ref
        .current?.()
        .then((data) => (setData(data), setStatus('done')))
        .catch(() => setStatus('error'))
    }
  }, [id, options?.enabled])

  return { loading: status === 'loading', error: status === 'error', data }
}
