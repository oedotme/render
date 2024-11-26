import { useLoaderData } from 'react-router'

import { getRepo, Repo } from '@/api'
import { Github, Logo } from '@/icons'

export const Loader = () => {
  return getRepo('render')
}

export default function Home() {
  const data = useLoaderData<Repo>()

  return (
    <>
      <Logo className="h-32 w-32" />
      <em className="mt-4 text-gray-700">{data.description}</em>

      <ul className="mt-8">
        <li>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 opacity-50 hover:opacity-80" />
          </a>
        </li>
      </ul>
    </>
  )
}
