import React from 'react'
import renderer from 'react-test-renderer'

import { Store } from '../Store'

describe('redux', () => {
  it('Store should be created', () => {
    const Component = renderer.create(<Store>testing</Store>)

    expect(Component).toMatchSnapshot()
  })
})
