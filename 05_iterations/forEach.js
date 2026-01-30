//for each
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
    console.log("For each loop iteration ", number);
});

//using arrow function
numbers.forEach((number) => {
    console.log("For each loop iteration with arrow function ", number);
});
function printMe(item){
    console.log("Item is ", item);
}
numbers.forEach(printMe);

//for each with objects
const users = [
    {username: "hitesh",
        age: 24},
    {username: "sam",
        age: 25},
    {username: "rocky",
        age: 26},
];
users.forEach((user) => {
    console.log(`Username is ${user.username} and age is ${user.age}`);
});