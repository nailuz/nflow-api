class UserController {
  static async getAllUsers() {
    return { users: 'a lot of users' }
  }

  static async createUser() {
    return { user: 'a new user' }
  }
}

export default new UserController()
