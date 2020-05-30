import Models from '~/database/models'

export const consumptionPutRoute = app => {
  app.put('/consumption', (req, res, next) => {
    const consumption = req.body

    if (!consumption || !consumption._id) {
      res.status(400).end('request-body-empty')
      next()
    }

    Models.ConsumptionModel
      .remove({ _id: req.body._id })
      .then(() => {
        const model = new Models.ConsumptionModel(req.body)

        return model.save()
          .then(() => {
            res.status(200).end()
          })
          .catch(() => {
            res.status(500).end('saving')
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
