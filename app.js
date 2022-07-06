// IMPLICIT TYPE CONVERSION

const numOne = "john";
const numTwo = "kofi";

// Substracting Two Non-digit Strings
const result = numOne - numTwo;
console.log(result);
// NaN

const numThree = "10";
const numFour = "20";

// Substracting Two number Strings
const resultTwo = numThree - numFour;

console.log(resultTwo);
//  -10

//  Adding two number strings will be concatenation
const resultThree = numFour + numThree;
console.log(resultThree);
//  1020

const numFive = 10;
const resultFour = numThree + numFive;

console.log(resultFive);
// 1010

// DATA TYPES
// Primitive - strings, number, boolean, null, undefined, symbol
// Object - Arrays, Functions, objects
