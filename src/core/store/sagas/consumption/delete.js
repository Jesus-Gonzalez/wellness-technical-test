import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from 'core/store/actionTypes'
import * as Api from 'api'

function* deleteConsumption(action) {
  const { item } = action
  try {
    yield call(Api.deleteConsumption, item)
    yield put({ type: ActionTypes.Consumption.DeleteSuccess, item })
  } catch {
    yield put({ type: ActionTypes.Consumption.DeleteError, item })
  }
}

export default function* deleteConsumptionsSaga() {
  yield takeLatest(ActionTypes.Consumption.Delete, deleteConsumption)
}
