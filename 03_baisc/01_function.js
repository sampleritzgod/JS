function SayMyName(){
    console.log('abhay is Best  !!');
    console.log('abhay is unbeatiable !! ');
    console.log('abhay is monster !!');
    console.log('abhay is Beast !! ');
}
SayMyName();
//
function addtwoNumber(num1, num2){
    return num1 + num2 ;
}
const numberOfSum = addtwoNumber(3,5);
console.log(`sum of two numbers is : ${numberOfSum}`);
//
function UserLoggedIn(username){
    return `${username} Is Just LoggedIn on system` ;
}
console.log(UserLoggedIn(`Abhay`)); // - if i not passed any value then we got undefined.
//
function Cart(...totalAdd){ // rest operation
    return totalAdd;
}
const addValue = Cart(23,45,678,8990,567);
console.log(addValue);
//
let user = {
    name : 'abhay',
    age : 20
}
function callObj(users){
    console.log(`username is ${users.name} and his age is ${users.age}`);
}
// console.log(callObj(user));  // 
//
// callObj(user); 
callObj({
    name: 'sam',
    age: 20
})
//
let arrForman = [234,5445,576767,5677];
function argValue(getarray){
    return getarray[1];
}
console.log(argValue(arrForman));