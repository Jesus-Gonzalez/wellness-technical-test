import Models from '~/database/models'

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
      res.status(400).end('request-body-empty')
    }

    const model = new Models.ConsumptionModel(req.body)

    return model.save()
      .then(consumption => {
        console.log('consumption', consumption)
        res.status(200).end(JSON.stringify(consumption))
      })
      .catch(() => {
        res.status(500).end('saving')
      })
      .finally(() => {
        next()
      })
  })
}
