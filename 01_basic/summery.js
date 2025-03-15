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