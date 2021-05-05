<br>
<p align="center">
  <a href="https://rendertemplate.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="./src/assets/icons/logo.svg" alt="Render · Opinionated React Template" width="120"/>
  </a>
</p>
<p align="center"><em>Opinionated React Template</em></p>
<br>

# Render

Opinionated React template setup with modern tooling, here some [recommendations](#recommendations) if needed

## Stack

- Framework - [React](https://reactjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Routing - [React Router](https://reactrouter.com/web)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Build tool - [Vite](https://vitejs.dev)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)
- Git hooks - [Husky](https://typicode.github.io/husky)

## Features

#### Authentication

- `AuthProvider` context
- `useAuth` hook

#### File based routing

- Vite powered
- Extensions `.tsx`
- Index routes `src/pages/index.tsx` to `/`
- Nested routes `src/pages/routing/index.tsx` to `/routing`
- Dynamic routes `src/pages/routing/[dynamic].tsx` to `/routing/:dynamic`
- No matching routes `src/pages/404.tsx`
- Page Layouts

#### Pre-rendering

- Script `npm run export`
- Static HTML generated at `dist/static`

## Usage

By [generating](https://github.com/oedotme/render/generate) from this template then/or cloning locally

## Commands

```shell
# install dependencies
npm install

# start development server · http://localhost:3000
npm run dev

# build for production
npm run build

# serve production build · http://localhost:5000
npm run serve
```

## Recommendations

#### Server state

- [React Query](https://react-query.tanstack.com)
- [SWR](https://swr.vercel.app)

#### Data fetching

- [Redaxios](https://github.com/developit/redaxios)
- [Axios](https://github.com/axios/axios)

#### Language

- [ReScript](https://rescript-lang.org)

#### Framework

- [Next.js](https://nextjs.org)
- [Blitz](https://blitzjs.com)
- [Redwood](https://redwoodjs.com)

#### Animation

- [Framer Motion](https://www.framer.com/motion)

#### Components

- [Headless UI](https://headlessui.dev)

#### Global state

- [Zustand](https://github.com/pmndrs/zustand)
- [Recoil](https://recoiljs.org)
- [Jotai](https://github.com/pmndrs/jotai)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## License

MIT
