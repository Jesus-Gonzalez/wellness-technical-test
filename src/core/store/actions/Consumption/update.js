import * as ActionTypes from 'core/store/actionTypes'

export const updateConsumptions = item => ({
  type: ActionTypes.Consumption.Fetch,
  item
})
