import express from 'express'
import { setupRoutes } from './setupRoutes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

setupRoutes(app)

app.listen(4000, 'localhost', () => {
  console.log('development server started: localhost:4000')
})
