const request = require('supertest')
const app = require('../src/app')

describe('Users endpoints', () => {
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      name: 'SomeName',
      level: 'hard',
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    console.log('start', createdUser)
    expect(createdUser).toBe(true)
    // expect(createdUser.name).toBe(userToCreate.name)
    // expect(createdUser.level).toBe(userToCreate.level)
  })

  // it('get request to /users should list users', async () => {
  //   const userList = (await request(app).get('/users')).body
  //   const usersExist = userList.length > 0

  //   expect(usersExist).toBe(true)
  // })

  // it('user should be able to like a photo', async () => {
  //   // create a user
  //   const user = (
  //     await request(app).post('/user').send({
  //       name: 'User',
  //       level: 'hard',
  //     })
  //   ).body
  //   console.log('New user')
  // })
})
