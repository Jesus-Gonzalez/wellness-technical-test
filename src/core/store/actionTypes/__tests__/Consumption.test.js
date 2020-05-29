import { Consumption } from '../Consumption.enum'

describe('Actions', () => {
  it('Consumption should return the types object', () => {
    expect(Consumption).toMatchSnapshot()
  })
})
