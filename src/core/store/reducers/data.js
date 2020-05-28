import * as ActionTypes from 'core/store/actionTypes'

const initialState = {
  error: false,
  items: [],
  loading: true,
  status: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Consumption.Fetch: {
      return Object.assign({}, state, { loading: true })
    }

    case ActionTypes.Consumption.FetchSuccess: {
      return Object.assign({}, state, {
        loading: false,
        items: action.items
      })
    }

    case ActionTypes.Consumption.FetchError: {
      return Object.assign({}, state, {
        error: true,
        loading: false,
        items: []
      })
    }

    case ActionTypes.Consumption.Update: {
      const index = state.items
        .findIndex(item => item._id === action.prev._id)

      const nextItems = Array.from(state.items)
      nextItems.splice(index, 1, action.item)

      return Object.assign({}, state, {
        items: nextItems,
        status: ActionTypes.Consumption.Update
      })
    }

    case ActionTypes.Consumption.UpdateSuccess: {
      return Object.assign({}, state, {
        status: ActionTypes.Consumption.UpdateSuccess
      })
    }

    case ActionTypes.Consumption.UpdateError: {
      const index = state.items
        .findIndex(item => item._id === action.item._id)

      const nextItems = Array.from(state.items)
      nextItems.splice(index, 1, action.prev)

      return Object.assign({}, state, {
        error: true,
        items: nextItems,
        status: ActionTypes.Consumption.UpdateError
      })
    }

    default: return state
  }
}
