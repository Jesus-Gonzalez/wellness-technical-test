import Models from '~/database/models'

import { ResponseCode } from '~/constants'

export const consumptionPostRoute = app => {
  app.post('/consumption', (req, res, next) => {
    const consumption = req.body

    if ((
      !consumption ||
      !consumption.consumption ||
      !consumption.cost ||
      !consumption.price ||
      !consumption.date
    )) {
      res.status(400).end(ResponseCode.MissingBody)
      next()
    }

    const model = new Models.ConsumptionModel(req.body)

    return model.save()
      .then(consumption => {
        res.status(200).end(JSON.stringify(consumption))
      })
      .catch(() => {
        res.status(500).end(ResponseCode.Error)
      })
      .finally(() => {
        next()
      })
  })
}
