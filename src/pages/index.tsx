import { GitHub, Logo } from '@/assets'

export default function Home(): JSX.Element {
  return (
    <>
      <img className="w-32" src={Logo} alt="Render · Opinionated React Template" />
      <em className="mt-4 text-gray-700">Opinionated React Template</em>

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
