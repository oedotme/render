import { useEffect, useRef, useState } from 'react'

export type Query<T> = { loading: boolean; error: boolean; data?: T }

export function useQuery<T>(key: string | string[], fetcher: () => Promise<T>, options = { enabled: true }): Query<T> {
  const ref = useRef<() => Promise<T>>()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<T>()

  const id = typeof key === 'string' ? key : key.join('-')

  ref.current = fetcher

  useEffect(() => {
    if (options?.enabled) {
      ref
        .current?.()
        .then((data) => setData(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }
  }, [id, options?.enabled])

  return { loading, error, data }
}
