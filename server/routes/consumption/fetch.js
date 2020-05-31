import Models from '~/database/models'
import { ResponseCode } from '~/constants'

export const consumptionFetchRoute = app => {
  app.get('/consumption', (req, res, next) => {
    Models.ConsumptionModel
      .find().then(consumptions => {
        res
          .status(200)
          .type('application/json')
          .end(JSON.stringify(consumptions))
      })
      .catch(() => {
        res.status(500).end(ResponseCode.Error)
      })
      .finally(() => {
        next()
      })
  })
}
