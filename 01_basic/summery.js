// primitive and non-primitive 
// string, number, BigInt, Boolean, null, undefined, symbol

// non-primitve(reference)
// object, array, function\

const RefId = Symbol('123');
const anotherID = Symbol('123');
console.log(RefId == anotherID); // false

let CryptoUser = 122303458434444n;
//
const userID = ['abhay122', 'shrushh23', 'rohit456', 'tanisha567'];

// let CreateFunction = function Hello(){
//    return  console.log("Hello World !!");
// }
// console.log(Hello());

let a =() => {
    console.log("hello World");
}
console.log(a);

//
let User1 = {
    name: "abhay",
    age: 20,
    role: "assulter",
}
console.log(User1);

// stack (primitive) heap (non-primitive)
// in stack we get copy of output ya sometinng but in heap we get real / original value (memory)

let YouTube = "AbhayBGMI";
let AnotherChannel = YouTube;
AnotherChannel = "AbhayOG"
console.log(AnotherChannel);
console.log(YouTube);

let UserOne = {
    Email: "user123@gmail.com",
    Id: "123@ac",
    age: 22,
    passowrd: "QWx23@91"
}
let UserTwo = UserOne;
console.log(UserTwo);
console.log(typeof UserOne);
UserOne.Email = "Tanisha21@microsoft.com"
console.log( UserOne);
