import { createConsumption } from '../create'

describe('actions', () => {
  describe('create', () => {
    it('should return an action', () => {
      expect(createConsumption({ test: 'test' })).toMatchSnapshot()
    })
  })
})
