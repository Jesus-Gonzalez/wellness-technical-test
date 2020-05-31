import React from 'react'
import PropTypes from 'prop-types'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(sagas)

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element
  ]).isRequired
}

export const Store = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

Store.propTypes = propTypes
