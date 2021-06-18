import { Query, useQuery } from '@/hooks'

const get = (url: string) => fetch(url).then((response) => response.json())

type Repo = { id: string; description: string }

export const useRepo = (name = 'render'): Query<Repo> => {
  return useQuery<Repo>(['repo', name], () => get(`https://api.github.com/repos/oedotme/${name}`), { policy: 'cache' })
}
