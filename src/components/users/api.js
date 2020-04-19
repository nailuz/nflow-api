import UserController from './controllers'

class UserApi {
  static async signUp() {
    return UserController.createUser()
  }

  static async getUsers() {
    return UserController.getAllUsers()
  }
}

export default new UserApi()
