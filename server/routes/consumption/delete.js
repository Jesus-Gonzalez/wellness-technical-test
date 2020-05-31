import Models from '~/database/models'

import { ResponseCode } from '~/constants'

export const consumptionDeleteRoute = app => {
  app.delete('/consumption', (req, res, next) => {
    const consumption = req.body

    if (!consumption || !consumption._id) {
      res.status(400).end(ResponseCode.MissingBody)
      next()
    }

    Models.ConsumptionModel
      .remove({ _id: req.body._id })
      .then(() => {
        res.status(200).end(ResponseCode.Ok)
      })
      .catch(() => {
        res.status(500).end(ResponseCode.Error)
      })
      .finally(() => {
        next()
      })
  })
}
