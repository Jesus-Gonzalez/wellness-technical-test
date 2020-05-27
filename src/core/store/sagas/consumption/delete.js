import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from 'core/store/actionTypes'
import * as Api from 'api'

function* deleteConsumption(action) {
  try {
    const result = yield call(Api.deleteConsumption)
    yield put({ type: ActionTypes.Consumption.DeleteSuccess, item: action.item, result })
  } catch {
    yield put({ type: ActionTypes.Consumption.DeleteError })
  }
}

export default function* deleteConsumptionsSaga() {
  yield takeLatest(ActionTypes.Consumption.Delete, deleteConsumption)
}
