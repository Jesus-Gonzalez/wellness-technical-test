import React from 'react'
import renderer from 'react-test-renderer'

import { Button } from '../Button.template'

describe('components', () => {
  describe('Button', () => {
    it('should render', () => {
      const Component = renderer.create(<Button>buttonText</Button>)

      expect(Component).toMatchSnapshot()
    })

    it('should render className', () => {
      const Component = renderer.create((
        <Button
          className="test-class-123123"
        >
          buttonText
        </Button>
      ))

      expect(Component).toMatchSnapshot()
    })

      it('should render btn-<type>', () => {
        const Component = renderer.create((
          <Button
            type="invisible"
          >
            buttonText
          </Button>
        ))

        expect(Component).toMatchSnapshot()
      })

      it('should be submit if property added', () => {
      const Component = renderer.create((
        <Button
          submit
        >
          buttonText
        </Button>
      ))

      expect(Component).toMatchSnapshot()
    })
  })
})
