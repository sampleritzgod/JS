const myArr = [1,2,3,4,5,67,8,9];
console.log(myArr);
console.log(myArr[1]);
//
const arr = new Array(34,546,678);
console.log(arr);
//
myArr.push(23);
myArr.push(34); // add element 
myArr.pop(); //- remove last element
console.log(myArr);
//
myArr.unshift(3);
myArr.shift(); // - remove element starting of array
myArr.unshift(34); //- add element starting of array
console.log(myArr);
//
myArr.includes(9); // - return boolean value
myArr.indexOf(3); // - index 
//
myArr.join(); //-convert into string.
//
const shipping = [2,4,56,7,89,5];
console.log(shipping.slice(2,4));
const myn1 = shipping.slice(1,3);
console.log("A", myn1);
//
console.log("B",myn1.splice(1,3)); // splice 
//
const month = ['jan', 'march', 'april', 'may'];
console.log(`before use of splice - ${month}`);
//
month.splice(1,0, "feb");
console.log(`after adding splice - ${month}`);
//
month.splice(4,1, "june");
console.log(`replace with splice - ${month}`);
//
const gods = ['ganesh','krishna','karn'];
const triLock_gods = ['lord-shiv', 'lord-bramdev','lord-vishnu'];

gods.push(triLock_gods); // - they assume that array is an element , trit like an single element.
console.log(gods, "\n");
//
const AllHeroes = gods.concat(triLock_gods); // return new array aslo combine push method 
console.log(AllHeroes);
//
const new_arr_heros = [...gods, ...triLock_gods]; // similier to concat but it's call sperad (given multiple value to sperad array);
console.log(new_arr_heros[5]);
//
const DataReturn_arr = [23,23,4,5,[455,567,7,8,9,7,56,3,56,8,33],[3456],68,[[678],78,],899[6789,34],89]; 
const original_data_arr = DataReturn_arr.flat(Infinity); // sperad all data into single array
console.log(original_data_arr);
//
console.log(Array.isArray("abhay")); // is that your name in array if yes then print true if no then print false. 
console.log(Array.from('abhay')); // contain only 1 parameter, create array given value give any value 
//
console.log(Array.from({city : 'rajkot', state : 'gujarat'})); // they not print key value pairs
console.log(Array.from(Object.entries({ city: 'rajkot', state: 'gujarat' }))); // is a real syntax
//
let player1 = 23;
let player2 = 24;
let player3 = 25;
console.log(Array.of(player1, player2, player3, original_data_arr));
//
