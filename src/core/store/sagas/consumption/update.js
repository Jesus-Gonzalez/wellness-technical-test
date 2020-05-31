import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from 'core/store/actionTypes'
import * as Api from 'api'

function * updateConsumption (action) {
  const { item, prev } = action
  try {
    yield call(Api.updateConsumption, item)
    yield put({ type: ActionTypes.Consumption.UpdateSuccess, item, prev })
  } catch (error) {
    console.error('error', error)
    yield put({ type: ActionTypes.Consumption.UpdateError, item, prev })
  }
}

export default function * updateConsumptionSaga () {
  yield takeLatest(ActionTypes.Consumption.Update, updateConsumption)
}
