// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

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

type Params = {
  '/dynamic/:timestamp': { timestamp: string }
}

type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
