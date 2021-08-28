<br>
<p align="center">
  <a href="https://rendertemplate.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="./public/assets/icons/logo.svg" alt="Render · Opinionated React Template" width="120"/>
  </a>
</p>
<p align="center"><em>Opinionated React Template</em></p>
<br>

# Render

Opinionated React template setup with modern tooling, here some [recommendations](#recommendations) if needed

## Stack

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Router](https://reactrouter.com/web)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [Vercel](http://vercel.com)

## Features

#### File based routing

- Vite powered
- Next.js inspired
- Extensions `.tsx`
- Custom app component at `src/pages/_app.tsx`
- Index routes `src/pages/index.tsx` to `/`
- Nested routes `src/pages/nested/within.tsx` to `/nested/within`
- Dynamic routes `src/pages/dynamic/[timestamp].tsx` to `/dynamic/:timestamp`
- Catch all routes `src/pages/catch/[...all].tsx` to `/catch/*`
- None matching routes `src/pages/404.tsx`
- Optional page scope

#### Hooks

- Authentication [`useAuth`](./src/context/auth.tsx)
- API queries [`useQuery`](./src/hooks/query.ts)

#### Pre-rendering

- Script `npm run export`
- Static HTML generated at `build/static/dist`

## Usage

By [generating](https://github.com/oedotme/render/generate) from this template then/or cloning locally

## Commands

```shell
# install dependencies
npm install

# start development server · http://localhost:3000
npm run dev

# build client for production
npm run build

# start production preview · http://localhost:5000
npm run start
```

## Recommendations

#### Frameworks

- [Next.js](https://nextjs.org)
- [Blitz](https://blitzjs.com)
- [Redwood](https://redwoodjs.com)
- [Remix](https://remix.run)

#### Languages

- [ReScript](https://rescript-lang.org)

#### Components

- [Headless UI](https://headlessui.dev)
- [Chakra UI](https://chakra-ui.com)

#### Build tools

- [Snowpack](https://snowpack.dev)

#### Server state

- [React Query](https://react-query.tanstack.com)
- [SWR](https://swr.vercel.app)

#### Data fetching

- [Redaxios](https://github.com/developit/redaxios)
- [Axios](https://github.com/axios/axios)

#### Global state

- [Recoil](https://recoiljs.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [Jotai](https://github.com/pmndrs/jotai)
- [Redux Toolkit](https://redux-toolkit.js.org)

#### Animation

- [Framer Motion](https://www.framer.com/motion)

## License

MIT
