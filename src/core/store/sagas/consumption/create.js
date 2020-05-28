import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from 'core/store/actionTypes'
import * as Api from 'api'

function* createConsumption(action) {
  const { item } = action
  try {
    const consumption = yield call(Api.createConsumption, item)
    yield put({ type: ActionTypes.Consumption.CreateSuccess, item: consumption })
  } catch (error) {
    yield put({ type: ActionTypes.Consumption.CreateError, item })
  }
}

export default function* updateConsumptionSaga() {
  yield takeLatest(ActionTypes.Consumption.Create, createConsumption)
}
