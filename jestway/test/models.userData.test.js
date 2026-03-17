const User = require('../models/user');
const UserData = require('../models/userData');

// Count method
describe('Count user', () => {
    test('default user count', () => {
      testUserData = new UserData();  
      const userCount = testUserData.getUserCount();
      expect(userCount).toEqual(3);
    })

    test('clear user and Count', () => {
        testUserData = new UserData(); 
        testUserData.clearUsers()
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    
    })
})

// Remove user
describe('remove user', () => {
    test('Remove one', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeOneUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(1);
    })
})

//Get n Set
describe('User class methods', () => {
    test('should get name and email correctly', () => {
        const testUser = new User('Tony', 'tony@stark.com');
        expect(testUser.getName()).toEqual('Tony');
        expect(testUser.getEmail()).toEqual('tony@stark.com');
    });

    test('should set new name and email correctly', () => {
        const testUser = new User('Tony', 'tony@stark.com');
        
        // ทดสอบการเปลี่ยนค่า (Set)
        testUser.setName('Iron Man');
        testUser.setEmail('ironman@avengers.com');

        // ตรวจสอบว่าค่าเปลี่ยนไปตามที่ตั้งไว้หรือไม่
        expect(testUser.getName()).toEqual('Iron Man');
        expect(testUser.getEmail()).toEqual('ironman@avengers.com');
    });
});

// Remove two users
test('Remove two users from default data', () => {
  testUserData = new UserData();
  testUserData.removeTwoUser();
  const userCountAfter = testUserData.getUserCount();
  expect(userCountAfter).toEqual(1); 
})

test('Remove two users when only one exists', () => {
  testUserData = new UserData();
  testUserData.clearUsers(); 
  testUserData.addUser(new User('Peter', 'peter@parker.com')); 
  
  testUserData.removeTwoUser(); 
  const userCountAfter = testUserData.getUserCount();
  expect(userCountAfter).toEqual(0); 
})