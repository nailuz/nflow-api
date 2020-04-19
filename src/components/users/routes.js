import { Router } from 'express'
import ApiUsers from './api'

const userRoutes = Router()

userRoutes.get('', async (req, res) => {
  const result = await ApiUsers.getUsers()
  res.status(200).json(result)
})

userRoutes.post('', async (req, res) => {
  const result = await ApiUsers.singUp()
  res.status(200).json(result)
})

export default userRoutes
