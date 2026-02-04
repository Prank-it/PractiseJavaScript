//object literal
 const user ={
    username :"hitesh",
    loginCount : 8 ,
    signedIn : true,

getUserDetails : function() {
   // console.log("got user details");
    //console.log(this);
}

 }
 //console.log(user.username);
 //console.log(user.getUserDetails());
 //console.log(this); // global object

 //constructor function
 

 function userNew (username , logincount, isLoggedIn){
 this.username = username ;
 this.logincount = logincount ;
 this.isLoggedIn = isLoggedIn;
// return this;
 }
 const userone = new userNew ("hitesh",12,true);
 const usertwo = new userNew("chaiaurcode",34,false);
 console.log(userone); 
 console.log(usertwo);
//what  happens when new keyword is used
//1. a new object is created
//2. function is called with this keyword pointing to new object
//3. object is linked to prototype
//4. function automatically return the object