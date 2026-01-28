//singleton,when we declare objects as litrals then singleton is not created , its one of it own types, by contructor it is created
//eg = object.create

//object literals

const mysymbol = Symbol("key1");
const jsUser ={
    name : "hitesh",
    age: 18,
    location: "jaipur",
    email : "abc@gamil.com",//here the key " email " is take as string by default thats why we use the square method to print and . method also works
    "work" : "engineer",//here you have writen the key "work" as a string by urself hence you can only use the square method to print and . method will be invalid 
    isLoggedIn : false,
    arr : ["mondey","turesday"],
    //symbol
    [mysymbol]: "mykey1",//now this is declared as a symbol inside the object , its good interview question

}

//this is how we access the values of a object 
console.log(jsUser.email);
console.log(jsUser["email"]);

//add funtion to a object 
jsUser.greeting = function(){
    console.log(`hello js user, ${this.name} `);
};
console.log(jsUser.greeting());

//symbol is accessed by square method only 



