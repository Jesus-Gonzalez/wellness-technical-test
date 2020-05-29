import { fetchConsumptions } from '../fetch'

describe('redux', () => {
  describe('actions', () => {
    describe('fetch', () => {
      it('should return an action', () => {
        expect(fetchConsumptions()).toMatchSnapshot()
      })
    })
  })
})
