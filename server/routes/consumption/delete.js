import Models from '~/database/models'

export const consumptionDeleteRoute = app => {
  app.delete('/consumption', (req, res, next) => {
    const consumption = req.body

    if (!consumption || !consumption._id) {
      res.status(400).end('request-body-empty')
      next()
    }

    Models.ConsumptionModel
      .remove({ _id: req.body._id })
      .then(() => {
        res.status(200).end()
      })
      .catch(error => {
        res.status(500).end(error)
      })
      .finally(() => {
        next()
      })
  })
}
