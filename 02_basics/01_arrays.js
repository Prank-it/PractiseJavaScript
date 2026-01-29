//arrays

const myArr = [0,1,2,3,4];
//its an object and is resizeble 
console.log(myArr[0]); 
const heroes = [ "hulk", "spiderman", "iron man "];
//another way of declaring arrays
const arr2 = new Array(1,2,3,4,5);

//arrayMethods
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
console.log(myArr.includes(4));
console.log(myArr.indexOf(6));
const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

//slice and splice

//slice 
console.log(myArr);
const myArr1=(myArr.slice(1,3));
console.log(myArr1);
console.log(myArr);

//splice
console.log(myArr);
const myArr2= myArr.splice(1,3);
console.log(myArr2);
console.log(myArr);

