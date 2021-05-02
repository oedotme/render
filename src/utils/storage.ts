const store = typeof window !== 'undefined' ? localStorage : undefined

export const storage = {
  set: <Item>(key: string, value: Item): void => store?.setItem(key, JSON.stringify(value)),
  get: <Item>(key: string): Item => JSON.parse(store?.getItem(key) || '""'),
  remove: (key: string): void => store?.removeItem(key),
}
