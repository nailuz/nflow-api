import * as controllers from './controllers'

export const signUp = () => {
  return controllers.createUser()
}

export const getUsers = () => {
  return controllers.getAllUsers()
}
