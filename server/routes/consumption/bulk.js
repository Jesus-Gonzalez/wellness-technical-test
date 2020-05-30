import moment from 'moment'

import Models from '~/database/models'

export const consumptionBulkRoute = app => {
  app.post('/consumption/bulk', (req, res, next) => {
    if (!req.body || !req.body.length) {
      res.status(400).end('missing-body')
      next()
    }

    const models = req.body.map(row => (
      new Models.ConsumptionModel({
        date: moment(`${row[0]} ${row[1]}`, 'YYYY-MM-DD h.m'),
        consumption: Number(row[2]),
        price: Number(row[3]),
        cost: Number(row[4]),
      })
    ))

    Models.ConsumptionModel
      .insertMany(models)
      .then(response => {
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
