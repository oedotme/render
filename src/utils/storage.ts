const store = typeof window !== 'undefined' ? localStorage : undefined

export const storage = {
  set: <Item>(key: string, value: Item): void => store?.setItem(key, JSON.stringify(value)),
  get: <Item>(key: string): Item => {
    return store?.getItem(key)?.startsWith('{') ? JSON.parse(store?.getItem(key) || '""') : store?.getItem(key)
  },
  remove: (key: string): void => store?.removeItem(key),
}
