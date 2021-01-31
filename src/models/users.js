class Users {
  constructor() {
    this.users = [
      {
        name: 'enis',
        id: '1',
      },
      {
        name: 'nde',
        id: '2',
      },
    ]
  }

  getUser(index) {
    return this.users[index].name
  }
}
module.exports = Users
