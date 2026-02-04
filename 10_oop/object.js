function multiply (num){
    return num * 2; 
}

multiply.power = 2;
console.log(multiply(4));
console.log(multiply.power);
console.log(multiply.prototype);


function createUser(username , score){

}

//create ur own property using prototype
createUser.prototype.increment = function(){
    this.score++;
}