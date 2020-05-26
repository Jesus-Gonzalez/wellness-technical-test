export const consumptionBulkRoute = app => {
  app.post('/consumption/bulk', (req, res) => {
    console.log('req', req.body)

    res.status(200).end('ready')
  })
}
