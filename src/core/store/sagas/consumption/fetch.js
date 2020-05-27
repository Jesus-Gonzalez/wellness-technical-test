import { call, put, takeLatest } from 'redux-saga/effects'

import * as ActionTypes from 'core/store/actionTypes'
import * as Api from 'api'

function* fetchConsumptions() {
  console.log('fetching consumptions')

  try {
    const films = yield call(Api.fetchConsumptions)
    yield put({ type: ActionTypes.Consumption.FetchSuccess, films })
  } catch {
    yield put({ type: ActionTypes.Consumption.FetchError })
  }
}

export default function* fetchConsumptionsSaga() {
  yield takeLatest(ActionTypes.Consumption.Fetch, fetchConsumptions)
}
