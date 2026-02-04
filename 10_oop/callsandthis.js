function setUserName(username){
    this.username = username;
    console.log("caleed");
}
function createUser(username, email, password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
    this.email= email;
}
const chai = new createUser("chai", "chai@123","12345");
console.log(chai);