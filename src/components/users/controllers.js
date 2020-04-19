import User from './models/User'

export const getAllUsers = () => {
  return { users: 'a lot of users' }
}

export const createUser = async (name, email, password) => {
  return await User.create({ name, email, password })
}
