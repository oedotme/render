// Generouted, changes to this file will be overriden
/* eslint-disable react/no-children-prop */

import { Fragment, lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { components, hooks, utils } from '@generouted/react-router/client'

import app from './pages/_app'
import noMatch from './pages/404'

const Catchall = lazy(() => import('./pages/catch/[...all]'))
const Dynamictimestamp = lazy(() => import('./pages/dynamic/[timestamp]'))
const Index = lazy(() => import('./pages/index'))
const Login = lazy(() => import('./pages/login'))
const Logout = lazy(() => import('./pages/logout'))
const Nested = lazy(() => import('./pages/nested'))
const Nestedchild = lazy(() => import('./pages/nested/child'))
const Nestedindex = lazy(() => import('./pages/nested/index'))
const Nestedsibling = lazy(() => import('./pages/nested/sibling'))
const Routing = lazy(() => import('./pages/routing'))
const App = app || Outlet
const NoMatch = noMatch || Fragment

const config = [
  {
    path: 'dynamic',
    id: 'dynamic',
    children: [
      {
        id: 'dynamictimestamp',
        path: ':timestamp',
        element: <Suspense fallback={null} children={<Dynamictimestamp />} />,
      },
    ],
  },
  {
    path: 'catch',
    id: 'catch',
    children: [{ id: 'catchall', path: '*', element: <Suspense fallback={null} children={<Catchall />} /> }],
  },
  {
    id: 'index',
    path: '/',
    element: <Suspense fallback={null} children={<Index />} />,
    loader: (args: any) => import('./pages/index').then((m) => m.Loader.apply(m.Loader, [args] as any)),
  },
  { id: 'login', path: 'login', element: <Suspense fallback={null} children={<Login />} /> },
  { id: 'logout', path: 'logout', element: <Suspense fallback={null} children={<Logout />} /> },
  {
    id: 'nested',
    path: 'nested',
    element: <Suspense fallback={null} children={<Nested />} />,
    children: [
      { id: 'nestedsibling', path: 'sibling', element: <Suspense fallback={null} children={<Nestedsibling />} /> },
      { id: 'nestedindex', index: true, element: <Suspense fallback={null} children={<Nestedindex />} /> },
      { id: 'nestedchild', path: 'child', element: <Suspense fallback={null} children={<Nestedchild />} /> },
    ],
  },
  {
    id: 'routing',
    path: 'routing',
    element: <Suspense fallback={null} children={<Routing />} />,
    loader: (args: any) => import('./pages/routing').then((m) => m.Loader.apply(m.Loader, [args] as any)),
  },
]

type Path =
  | `/`
  | `/catch/${string}`
  | `/dynamic/:timestamp`
  | `/login`
  | `/logout`
  | `/nested`
  | `/nested/child`
  | `/nested/sibling`
  | `/routing`

type Params = { '/dynamic/:timestamp': { timestamp: string } }

export const routes = [{ element: <App />, children: [...config, { path: '*', element: <NoMatch /> }] }]
export const Routes = () => <RouterProvider router={createBrowserRouter(routes)} />
export const { Link, Navigate } = components<Path, Params>()
export const { useNavigate, useParams } = hooks<Path, Params>()
export const { rediect } = utils<Path, Params>()
