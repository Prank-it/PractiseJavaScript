class User {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }

}
const chai = new User("chai", "chai@gmail.com", "134" );
console.log(chai.encryptPassword());


//behind the scene og class
function Userone(username , email, password){
    this.username = username ;
    this.email = email;
    this.password = password;
}
Userone.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
const tea = new Userone("tea","tea@gmail.com", "123");
console.log(tea.encryptPassword());