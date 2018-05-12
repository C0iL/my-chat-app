const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Tom',
      room: 'Test'
    },{
      id: '2',
      name: 'Jen',
      room: 'Test 2'
    },{
      id: '3',
      name: 'C0iL',
      room: 'Test'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1234',
      name: 'Tom',
      room: 'Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('shouldn\'t remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('shouldn\'t find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });


  it('should return names for Test', () => {
    var userList = users.getUserList('Test');

    expect(userList).toEqual(['Tom', 'C0iL']);
  });

  it('should return names for Test 2', () => {
    var userList = users.getUserList('Test 2');

    expect(userList).toEqual(['Jen']);
  })
});
