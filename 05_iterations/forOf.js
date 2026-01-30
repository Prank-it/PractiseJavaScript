//for of
let  arr = [10, 20, 30, 40, 50];
for(const i of arr){
    console.log("For of loop iteration ", i);
}

let str = "Hitesh Choudhary";
for(const char of str){
    console.log("Character is ", char);
}

//map
const myMap = new Map();
myMap.set(1, "Hitesh");
myMap.set(2, "Choudhary");
myMap.set(3, "is");
myMap.set(4, "a");
myMap.set(5, "good");
myMap.set(6, "instructor");

for(const [key, value] of myMap){
    console.log(`Key is ${key} and value is ${value}`);
}
//loop on objects
const myObj = {
    name: "Hitesh",
    age: 24,
    profession: "Instructor"
}

