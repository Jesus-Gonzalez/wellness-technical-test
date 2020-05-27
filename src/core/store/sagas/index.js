import { all } from 'redux-saga/effects'

import * as Consumption from './consumption'

export default function * RootSaga () {
  yield all([
    ...Object.values(Consumption).map(fn => fn())
  ])
}
