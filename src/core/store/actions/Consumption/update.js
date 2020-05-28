import * as ActionTypes from 'core/store/actionTypes'

export const updateConsumption = (item, prev) => ({
  type: ActionTypes.Consumption.Update,
  item,
  prev
})
