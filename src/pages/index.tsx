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
      <img className="w-32 h-32" src="/assets/icons/logo.svg" alt={data.name} title={data.name} />
      <em className="mt-4 text-gray-700">{data.description}</em>

      <ul className="mt-8">
        <li>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6 opacity-50 hover:opacity-80" src="/assets/icons/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  )
}
