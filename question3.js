// Question 3: User Management System

const users = [
  { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
  { id: 2, username: "jane_smith", age: 32, isActive: false, role: "admin" },
  { id: 3, username: "bob_wilson", age: 19, isActive: true, role: "user" },
  { id: 4, username: "alice_brown", age: 28, isActive: true, role: "moderator" },
  { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" }
];


// a) Find all active users over 21 years old
const activeUsersOver21 = users.filter((user)=>{
     return user.isActive === true && user.age>21 
     
})
console.log(activeUsersOver21);


// b) Check if there are any inactive admin users

const admincheck = users.filter((user)=>{
    return user.isActive===false && user.role === "admin"; 
})

console.log(admincheck);



// c) Find the first user with "moderator" role
const modfinder = users.find((user)=>{
  return user.role ==="moderator"; 
})

console.log(modfinder);


// d) Get all usernames of active users
const activeuser = users.filter(function(user){
    return user.isActive === true ; 
}).map(function(user){
   return user.username; 
})

console.log(activeuser);
// e) Check if all users have usernames longer than 5 characters

const fivechar = users.every((user)=>{
    return user.username.length>5 ; 
})

console.log(fivechar);