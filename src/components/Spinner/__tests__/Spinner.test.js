import React from 'react'
import renderer from 'react-test-renderer'

import { Spinner } from '../Spinner.template'

describe('components', () => {
  describe('Spinner', () => {
    it('should render', () => {
      const Component = renderer.create(<Spinner />)

      expect(Component).toMatchSnapshot()
    })
  })
})
