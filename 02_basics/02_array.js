const heroes = ["thor", "hulk", "spiderman"];
const dc_heroes = ["flash", "batman", "superman"];
//push adds the another array as a data to the first array


const allnewHeroes = [...heroes,...dc_heroes];
console.log(allnewHeroes);//better way toh join 

//diff situation
//.flat 
const  anotherArray = [1,3,[3,4,[6,7]],9];
const newAnotherArray =  anotherArray.flat(Infinity);
console.log(newAnotherArray);

//check if the input is array and conver the input to array using "from"

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
let a = 1;
let b = 2; 
let c = 3;
console.log(Array.of(a,b,c));