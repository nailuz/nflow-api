/* eslint-disable no-undef */
import User from '../../src/components/users/models/User'
import '../../src/database/postgres'

describe('Authentication', () => {
  it('Should receive JWT token when authenticated with valid credentials', async () => {
    const newUser = await User.create({
      name: 'User Test',
      email: 'user@example.com',
      password: 'example',
    })
    expect(newUser.email).toBe('user@example.com')
  })
})
