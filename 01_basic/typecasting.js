let StrNumber = 33;
let CastInStr = String(StrNumber);
console.log(CastInStr);
console.log(typeof (CastInStr));
console.log(typeof StrNumber);
//
let BoolValue = -1;
let CastInBool = Boolean(BoolValue);
console.log(CastInBool);
console.log(typeof CastInBool);
//
let EmailVerify = "a"; // NaN - not a number , NaN is object 
let CastInNumber = Number(EmailVerify);
console.log(CastInNumber);
console.log(typeof (CastInNumber));
// 
// ! operations 

// +  - * / % ** 
// == === <= >= = 
// && || !=
// ~ > < . 

console.log("1" + 2 + 3 ); // - 123 Output
console.log(1 + 3 + "2"); // - 42 Output

// - The abstract operation ToPrimitive takes argument input 
// revasion Typecasting 
 
let x = 3;
let y = x++;
console.log(`x:${x}, y:${y}`);
console.log(y);
console.log(x);
let a = 3;
let b = ++a;
console.log(`a:${a}, b:${b}`);
console.log(b);