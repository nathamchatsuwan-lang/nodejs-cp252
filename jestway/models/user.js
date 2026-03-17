class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getName(){
    return this.name;
  }
  getEmail(){
    return this.email;
  }
  setName(NewName){
    this.name = NewName;
  }
  setEmail(NewEmail){
    this.email = NewEmail;
  }
}

module.exports = User;
