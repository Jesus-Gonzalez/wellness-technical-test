import { fetchConsumptions } from 'core/store/actions'
import * as Actions from 'core/store/actionTypes'

import reducer from '../data'

describe('redux', () => {
  describe('reducers', () => {
    it('data should be functional', () => {
      let state = reducer({}, { type: 'init' })
      expect(state).toMatchSnapshot()

      state = reducer(state, fetchConsumptions())
      expect(state).toMatchSnapshot()

      state = reducer(state, {
        type: Actions.Consumption.FetchSuccess,
        items: [{ id: 1 }, { id: 2 }]
      })
      expect(state).toMatchSnapshot()
    })
  })
})
