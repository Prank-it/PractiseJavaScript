class User{
    constructor(username ){
        this.username = username;
    }
    logme(){
        console.log(`i am logged in as ${this.username}`);
    }
}
class Teeacher extends User{
    constructor(username, email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
}