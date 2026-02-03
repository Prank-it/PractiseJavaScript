const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    }, 1000);
})
promise1.then(function(){
    console.log("promise is resolved");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 is completed");
        resolve();
    }, 1000);
}).then(function(){
    console.log("promise 2 is resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email : "chai@gmail.com"});
    },1000);
});
promise3.then(function(user){
    console.log(user);
})
const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false; 
        if(!error){
            resolve({username : "hitesh", email:"hitesh@gmail.com"});
        }
        else{
            reject("error: something went wrong");
        }
    },1000);
})

promise4.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("promise is either resolved or rejected");
})

const promise5 = new Promise(function(resolve, reject ){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({username : "javascript", email:"hitesh@gmail.com"});
        }
        else{
            reject("error: something js went wrong");
        }
    },1000);

})
//async await
async function consumePromiseFive(){
    try{
        const response =  await promise5;
        console.log(response);
    
    }catch(error){
        console.log(error);
    }

}
consumePromiseFive();
async function fetchUsers(){
const response = await fetch("https://jsonplaceholder.typicode.com/users");
try{
const data = await response.json();
console.log(data);
}
catch(error){
    console.log(error);
}
}
fetchUsers();