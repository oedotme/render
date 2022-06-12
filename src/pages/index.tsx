import { LoaderFn, MakeGenerics, useMatch } from 'react-location'

import { Repo, getRepo } from '@/api'

type Route = MakeGenerics<{ LoaderData: Repo }>

export const loader: LoaderFn<Route> = () => {
  return getRepo('render')
}

export default function Home() {
  const { data } = useMatch<Route>()

  return (
    <>
      <img className="h-32 w-32" src="/assets/icons/logo.svg" alt={data.name} title={data.name} />
      <em className="mt-4 text-gray-700">{data.description}</em>

      <ul className="mt-8">
        <li>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <img className="h-6 w-6 opacity-50 hover:opacity-80" src="/assets/icons/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  )
}
