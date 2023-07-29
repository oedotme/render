<br>
<p align="center">
  <a href="https://rendertemplate.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="/public/logo.svg" alt="Render · Opinionated React Template" width="120"/>
  </a>
</p>
<p align="center"><em>Opinionated React Template</em></p>
<br>

# Render

Opinionated React template setup with modern tooling, here some [recommendations](#recommendations) if needed

## Technologies and tools

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Router](https://reactrouter.com)
- [Generouted for file-based routing and type-safe navigation](https://github.com/oedotme/generouted)
- [TailwindCSS](https://tailwindcss.com)
- [Playwright](https://playwright.dev)
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

- Using [`generouted` plugin for type-safe navigation](https://github.com/oedotme/generouted/tree/main/plugins/react-router)
- Check `generouted` [features](https://github.com/oedotme/generouted#features) and [conventions](https://github.com/oedotme/generouted#conventions) for more details

### Authentication example

- [Authentication context](./src/context/auth.tsx)
- [Routes guard](./src/config/guard.tsx)

### Custom hooks

- [`useQuery` hook](./src/hooks/query.ts)

## Usage

By [generating](https://github.com/oedotme/render/generate) from this template then/or cloning locally

## Getting started

#### Installation

```shell
# install dependencies
pnpm install

# install playwright browsers
pnpm playwright install --with-deps chromium
```

#### Development and build

```shell
# start development server · http://localhost:3000
pnpm dev

# build client for production
pnpm build

# start production preview · http://localhost:5000
pnpm preview
```

#### Testing — end-to-end and unit tests

```shell
# run all tests from the command-line
pnpm test

# run end-to-end tests in interactive mode
pnpm test:ui

# run end-to-end tests in headed browsers
pnpm test:headed

# run test generator to record an end-to-end test
pnpm test:record
```

## Recommendations

#### Frameworks

- [Astro](https://astro.build)
- [Next.js](https://nextjs.org)
- [Remix](https://remix.run)
- [Blitz](https://blitzjs.com)
- [Redwood](https://redwoodjs.com)

#### Non-React Frameworks

- [Solid](https://www.solidjs.com)
- [SolidStart](https://start.solidjs.com)
- [Preact](https://preactjs.com)

#### Languages

- [ReScript](https://rescript-lang.org)

#### Routing

- [TanStack Router](https://tanstack.com/router)

#### Components

- [Radix UI](https://www.radix-ui.com)
- [Headless UI](https://headlessui.dev)
- [Chakra UI](https://chakra-ui.com)

#### Build tools

- [Esbuild](https://esbuild.github.io)
- [Parcel](https://parceljs.org)

#### Server state

- [TanStack Query](https://tanstack.com/query)
- [SWR](https://swr.vercel.app)

#### Data fetching

- [Ky](https://github.com/sindresorhus/ky)
- [Redaxios](https://github.com/developit/redaxios)
- [Axios](https://github.com/axios/axios)

#### Global state

- [Zustand](https://github.com/pmndrs/zustand)
- [Jotai](https://jotai.org)
- [Recoil](https://recoiljs.org)
- [Redux Toolkit](https://redux-toolkit.js.org)

#### Animation

- [Framer Motion](https://www.framer.com/motion)

## License

MIT
