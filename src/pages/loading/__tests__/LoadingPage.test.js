import React from 'react'
import renderer from 'react-test-renderer'

import LoadingPage from '../LoadingPage'

describe('pages', () => {
  describe('LoadingPage', () => {
    it('should render', () => {
      const Component = renderer.create(<LoadingPage />)

      expect(Component).toMatchSnapshot()
    })
  })
})
