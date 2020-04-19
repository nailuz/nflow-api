import { Router } from 'express'
import * as api from './api'

const userRoutes = Router()

userRoutes.get('', (req, res) => {
  const result = api.getUsers()
  res.status(200).json(result)
})

userRoutes.post('', (req, res) => {
  const result = api.signUp()
  res.status(200).json(result)
})

export default userRoutes
