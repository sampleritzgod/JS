const RunScore = 256;

const SavingBalance = new Number(23000);
console.log(SavingBalance);
console.log(RunScore);
//
console.log(SavingBalance.toString().length);
console.log(SavingBalance.toFixed(2));
//
const GST = 234.790;
console.log(GST.toPrecision(3)); // - first priority is number than decimal.
//
const ResValue =  10000000;
console.log(ResValue.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));
//
const FigureNumber = -23;
console.log(Math.abs(FigureNumber));
//
console.log(Math.round(3.4)); // -rounded value 
//
console.log(Math.ceil(7.9)); //- topValue
//
console.log(Math.floor(4.8)); //- lowerValue 
//
console.log(Math.min(2,4,5,6,7));
//
console.log(Math.max(2,4,5,6,7,8));
//
console.log(Math.random());
//
console.log((Math.random()*10 ) +1); // - i had push 1 value in left side but sometime output will be 0.1 so that's why we use +1 in syntax
console.log(Math.floor(Math.random()* 100)+ 1); // -  static method always rounds down and returns the largest integer less than or equal to a given number.
const min = 10 ;
const max = 20 ;
console.log(Math.floor(Math.random()* (max - min + 1)) + min );