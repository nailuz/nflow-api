import express from 'express'
import routes from './routes.js'
import cors from 'cors'
import morgan from 'morgan'
import './database/postgres'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(morgan('dev'))
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
