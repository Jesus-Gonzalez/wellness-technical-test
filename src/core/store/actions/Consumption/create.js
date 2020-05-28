import * as ActionTypes from 'core/store/actionTypes'

export const createConsumption = item => ({
  type: ActionTypes.Consumption.Create,
  item
})
