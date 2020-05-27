import Models from '~/database/models'

export const consumptionFetchRoute = app => {
  app.get('/consumption', (req, res, next) => {
    Models.ConsumptionModel
      .find().then(consumptions => {
        res
          .status(200)
          .type('application/json')
          .end(JSON.stringify(consumptions))
      })
      .catch(error => {
        res.status(500).end(error)
      })
      .finally(() => {
        next()
      })
  })
}
