import Models from '~/database/models'
import { ResponseCode } from '~/constants'

export const consumptionPutRoute = app => {
  app.put('/consumption', (req, res, next) => {
    const consumption = req.body

    if (!consumption || !consumption._id) {
      res.status(400).end(ResponseCode.MissingBody)
      next()
    }

    Models.ConsumptionModel
      .remove({ _id: req.body._id })
      .then(() => {
        const model = new Models.ConsumptionModel(req.body)

        return model.save()
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
      .catch(error => {
        res.status(500).end(error)
        next()
      })
  })
}
