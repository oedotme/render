export const storage = {
  set: <Item>(key: string, value: Item): void => localStorage.setItem(key, JSON.stringify(value)),
  get: <Item>(key: string): Item => JSON.parse(localStorage.getItem(key) || '""'),
  remove: (key: string): void => localStorage.removeItem(key),
}
