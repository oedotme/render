import { ComponentProps } from 'react'

import { classNames } from '@/utils'

export const Button = (props: ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      className={classNames(
        'rounded-sm border border-black bg-default px-4 py-3 text-white disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-600',
        props.className,
      )}
    >
      {props.children}
    </button>
  )
}
