const userEmail = "abc@gmail.com";

if (userEmail) {
  console.log(`Your email is ${userEmail}`);
} else {
  console.log("Please provide your email");
}

//falsy values: false, 0, "", null, undefined, NaN,,bigInt -0n,-0;
//truthy values: everything that is not falsy
//"0",'false'," ",[],{},funtion(){}//etc are truthy values
// false == 0; //true
// false === 0; //false
//false == ' '; //true
// false === ' '; //false
//0==""; //true
//0===""; //false

let val1;
val1 = 5??10; //5
console.log(val1);

let val2 = null;
val2 = val2 ?? 10; //10
console.log(val2);  
