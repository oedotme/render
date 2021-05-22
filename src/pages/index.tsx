import { GitHub, Logo } from '@/assets'
import { useRepo } from '@/hooks'

export default function Home(): JSX.Element {
  const { loading, error, data } = useRepo('render')

  return (
    <>
      <img className="w-32 h-32" src={Logo} alt={data?.description} />
      <em className="mt-4 text-gray-700">
        {loading && 'loading...'}
        {error && 'Could not fetch data'}
        {data && data?.description}
      </em>

      <ul className="mt-8">
        <li>
          <a href="https://github.com/oedotme/render" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6 opacity-50 hover:opacity-80" src={GitHub} alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  )
}
