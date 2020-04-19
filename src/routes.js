import userRoutes from './components/users/routes'
import { Router } from 'express'

const routes = new Router()

routes.use('/users', userRoutes)

export default routes
