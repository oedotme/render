import { expect, test } from '@playwright/test'

import { classNames } from './class-names'

test('combine classes', () => {
  expect(classNames('text-black', 'bg-white')).toBe('text-black bg-white')
})
