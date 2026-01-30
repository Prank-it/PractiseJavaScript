const myObj = {
    js : "javascript",
    py : "python",
    cpp : "C++",
    java : "Java"
}
for(const key in myObj){
    console.log(`Key is ${key} and value is ${myObj[key]}`);
}

