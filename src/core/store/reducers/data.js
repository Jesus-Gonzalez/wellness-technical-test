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
      return Object.assign({}, state, {
        error: false,
        loading: true,
        status: ActionTypes.Consumption.Fetch
      })
    }

    case ActionTypes.Consumption.FetchSuccess: {
      return Object.assign({}, state, {
        loading: false,
        items: action.items,
        status: ActionTypes.Consumption.FetchSuccess
      })
    }

    case ActionTypes.Consumption.FetchError: {
      return Object.assign({}, state, {
        error: true,
        loading: false,
        items: [],
        status: ActionTypes.Consumption.FetchError
      })
    }

    case ActionTypes.Consumption.Create: {
      return Object.assign({}, state, {
        error: false,
        status: ActionTypes.Consumption.Create
      })
    }

    case ActionTypes.Consumption.CreateSuccess: {
      return Object.assign({}, state, {
        items: state.items
          .concat(action.item)
          .sort((a, b) => a.date > b.date ? 1 : -1),
        status: ActionTypes.Consumption.CreateSuccess
      })
    }

    case ActionTypes.Consumption.CreateError: {
      return Object.assign({}, state, {
        error: true,
        status: ActionTypes.Consumption.CreateError
      })
    }

    case ActionTypes.Consumption.Update: {
      const index = state.items
        .findIndex(item => item._id === action.prev._id)

      const nextItems = Array.from(state.items)
      nextItems.splice(index, 1, action.item)

      return Object.assign({}, state, {
        error: false,
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

    case ActionTypes.Consumption.Delete: {
      const index = state.items
        .findIndex(item => item._id === action.item._id)

      const nextItems = Array.from(state.items)
      nextItems.splice(index, 1)

      return Object.assign({}, state, {
        error: false,
        items: nextItems,
        status: ActionTypes.Consumption.Delete
      })
    }

    case ActionTypes.Consumption.DeleteSuccess: {
      return Object.assign({}, state, {
        status: ActionTypes.Consumption.DeleteSuccess
      })
    }

    case ActionTypes.Consumption.DeleteError: {
      const index = state.items
        .findIndex(item => item._id === action.item._id)

      const nextItems = Array.from(state.items)
      nextItems.splice(index, 0, action.item)

      return Object.assign({}, state, {
        error: true,
        items: nextItems,
        status: ActionTypes.Consumption.DeleteError
      })
    }

    default: return state
  }
}
