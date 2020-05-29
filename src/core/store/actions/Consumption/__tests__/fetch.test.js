import { fetchConsumptions } from '../fetch'

describe('actions', () => {
  describe('fetch', () => {
    it('should return an action', () => {
      expect(fetchConsumptions()).toMatchSnapshot()
    })
  })
})
