import * as ActionTypes from 'core/store/actionTypes'

const initialState = {
  error: false,
  items: [],
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Consumption.Fetch: {
      return Object.assign({}, state, { loading: true })
    }

    case ActionTypes.Consumption.Success: {
      return Object.assign({}, state, {
        loading: false,
        items: action.items
      })
    }

    case ActionTypes.Consumption.Error: {
      return Object.assign({}, state, {
        error: true,
        loading: false,
        items: []
      })
    }

    default: return state
  }
}
