import { useRepo } from '@/hooks'

export default function Home(): JSX.Element {
  const { loading, data } = useRepo('render')

  return (
    <>
      <img className="w-32 h-32" src="/assets/icons/logo.svg" alt="render" title="render" />
      <em className="mt-4 text-gray-700">{loading ? 'Loading...' : data ? data.description : '-'}</em>

      <ul className="mt-8">
        <li>
          <a href="https://github.com/oedotme/render" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6 opacity-50 hover:opacity-80" src="/assets/icons/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  )
}
