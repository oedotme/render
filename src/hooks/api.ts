import { Query, useQuery } from '@/hooks'

const url = 'https://api.github.com/repos/oedotme'
const http = {
  get: (url: string) => fetch(url).then((response) => response.json()),
}

type Repo = { id: string; description: string }

export const useRepo = (name = 'render'): Query<Repo> => {
  return useQuery<Repo>(['repo', name], () => http.get(`${url}/${name}`), { cacheTime: Infinity })
}
