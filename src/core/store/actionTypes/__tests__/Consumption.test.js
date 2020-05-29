import { Consumption } from '../Consumption.enum'

describe('redux', () => {
  describe('Actions', () => {
    it('Consumption should return the types object', () => {
      expect(Consumption).toMatchSnapshot()
    })
  })
})
