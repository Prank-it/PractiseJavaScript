class User {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.cpassword}abc`;
    }

}
const chai = new User("chai", "chai@gmail.com", "134" );
console.log(chai.encryptPassword());