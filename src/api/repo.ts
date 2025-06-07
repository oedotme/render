import { type Query, useQuery } from '@/hooks'

const url = 'https://api.github.com/repos/oedotme'
const get = <T>(url: string) => fetch(url).then((response) => response.json()) as Promise<T>

export type Repo = {
  id: string
  name: string
  description: string
  html_url: string
}

export const getRepo = (name = 'render') => get<Repo>(`${url}/${name}`)

export const useRepo = (name = 'render'): Query<Repo> => {
  return useQuery<Repo>(['repo', name], () => getRepo(name), { cacheTime: Infinity })
}
