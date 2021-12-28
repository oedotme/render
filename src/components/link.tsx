import { Link as LocationLink, LinkProps } from 'react-location'

export const Link = (props: LinkProps) => {
  return <LocationLink preload={5000} {...props} />
}
