import { call, put } from 'redux-saga/effects'

import * as Api from 'api'
import * as ActionTypes from 'core/store/actionTypes'

import { createConsumption } from '../create'

describe('redux', () => {
  describe('sagas', () => {
    describe('consumptions', () => {
      it('create should run', () => {
        const item = { item: 'hola' }
        const gen = createConsumption({ item })
        let value = gen.next().value
        expect(value).toEqual(call(Api.createConsumption, item))
        value = gen.next().value
        expect(value).toEqual(
          put({ type: ActionTypes.Consumption.CreateSuccess, item: undefined })
        )
      })

      it('create should fail', () => {
        const item = { item: 'hola' }
        const gen = createConsumption({ item })
        let value = gen.next().value
        expect(value).toEqual(call(Api.createConsumption, item))
        value = gen.throw().value
        expect(value).toEqual(
          put({ type: ActionTypes.Consumption.CreateError, item })
        )
      })
    })
  })
})
