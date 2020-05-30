import express from 'express'
import { setupRoutes } from './setupRoutes'
import cors from 'cors'
import bodyParser from 'body-parser'
import './database'

const app = express()

app.use(cors())
app.use(bodyParser.json())

setupRoutes(app)

app.listen(4000, 'localhost', () => {
  console.log('development server started: localhost:4000')
})
