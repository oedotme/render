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

## Technologies and tools

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Location](https://react-location.tanstack.com)
- [TailwindCSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Vite](https://vitejs.dev)
- [PNPM](https://pnpm.io)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Vercel](http://vercel.com)

## Features

### File based routing

- Using [`generouted`](https://github.com/oedotme/generouted)
- Vite powered
- [Next.js inspired](https://nextjs.org/docs/routing/introduction)
- Supports `.tsx` extensions
- Custom app at `src/pages/_app.tsx` _(optional)_
- Custom 404 page at `src/pages/404.tsx` _(optional)_
- Navigation between routes using [React Location's `<Link />` component](https://react-location.tanstack.com/docs/api#link)

##### Conventions

- Index routes `src/pages/index.tsx` to `/`
- Nested routes `src/pages/nested/within.tsx` to `/nested/within`
- Dynamic routes `src/pages/dynamic/[timestamp].tsx` to `/dynamic/:timestamp`
- Catch all routes `src/pages/catch/[...all].tsx` to `/catch/*`
- None matching routes `src/pages/404.tsx`

### Authentication example

- [Authentication context](./src/context/auth.tsx)

### Custom hooks

- [`useQuery` hook](./src/hooks/query.ts)

## Usage

By [generating](https://github.com/oedotme/render/generate) from this template then/or cloning locally

## Commands

```shell
# install dependencies
pnpm install

# start development server · http://localhost:3000
pnpm dev

# build client for production
pnpm build

# start production preview · http://localhost:5000
pnpm start
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
