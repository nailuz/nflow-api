import { Router } from 'express'
import * as api from './api'

const userRoutes = Router()

userRoutes.get('', (req, res) => {
  const result = api.getUsers()
  res.status(200).json(result)
})

userRoutes.post('', async (req, res) => {
  const contentRequest = { ...req.body }
  const result = await api.signUp(contentRequest)
  res.status(200).json(result)
})

export default userRoutes
