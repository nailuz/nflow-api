import * as controllers from './controllers'

export const signUp = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      const { name, email, password } = payload
      const newUser = controllers.createUser(name, email, password)
      resolve(newUser)
    } catch (error) {
      reject(error)
    }
  })
}

export const getUsers = () => {
  return controllers.getAllUsers()
}
