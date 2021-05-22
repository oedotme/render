import { Query, useQuery } from '@/hooks'

const get = (url: string) => fetch(url).then((response) => response.json())

type Repo = { id: string; description: string }

export function useRepo(name = 'render'): Query<Repo> {
  return useQuery<Repo>('repo', () => get(`https://api.github.com/repos/oedotme/${name}`))
}
