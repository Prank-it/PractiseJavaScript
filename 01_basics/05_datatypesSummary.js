//primitive and non primitive
//primitive
// 7 types : string, Number , Boolean , null, undefined, symbol,BigInt 
//copies are made


//non primitive
//array, object , funtions
const heroes = ["iron man","hulk", "spiderman"];
let myobj = {
    name : "hitesh",
    age : 22,
}
 console.log("hello");

const funtionn = function()
{
    console.log("hello");
}

//memory
//stack (primitive types) //heap(non preimitive)
//copies are made         //reference are made 

//stack(primitive)
 let  youtubename = "hiteshchaudhary";
 let anothername = youtubename;
 anothername = "prankit srivastava";
 console.log(youtubename);
 console.log(anothername);//this example shows tat in primitive data types copies of data are made 

 //head(non primitive)
 let userone= {
    email : "abc@gmaail.com",
    upi : "abc@ybl",
 }
 let usertwo= userone;
usertwo.email = "xyz@gmail.com";
console.log(userone.email);//this example shows that in heap reference is made so the chnages are made in the original address 