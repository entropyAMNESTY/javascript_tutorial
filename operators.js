// Unary vs binary operators

// Uniary Operators are mostly used to convert non-number types to numbers
// --> Like a shortcut for Number() conversion/casting function

let apples = '10';
let pears = '5';

console.log(apples + pears) // --> 105
console.log(+apples + +pears) // --> 15
console.log(Number(apples) + Number(pears)) // --> 15

// COERCION -ZWANG

let a= 10;
let b= '5';

document.write(a+b);

// Its translated from left to right -- 5 < 4 --> false
// false < 3 => true

console.log(5 < 4 < 3)

// Two types of Coercion -- explicit + implicit

//explicit
// Number(value);

// implicit -automatically by the interpreter
// 10/'5' --> null
// 3 types to coerce to: I string   II number   III boolean
// IF the datatypes are not the same coercion will happen

//strings
console.log('50'- 10) // --> automatically converts string to number --> 40 (Output)
console.log('20' / 2)

//explicit
let x = String(123);
console.log(String(true));

console.log(typeof(x)) 

let y = String(true);
console.log(typeof(y));

// Booleans
//IMPLICIT COERCION

console.log (1 > 2);
console.log (4 == 4);

// Falsy values
// Boolean(0) --> false
// Boolean(-0) --> false
// Boolean('') --> false
// Boolean(NaN) --> false
// Boolean(null) --> false
// Boolean(undefined) --> false
// Boolean(false) --> false

// EXPLICIT COERCION
let w = Boolean(4);
console.log(w);

// NUMBERS
// Implicit Coercion
// implicitly coerced the string to a number

let m = 4 > '3';
console.log(typeof(m));


// Explicit Coercion
let n ='123';
console.log(Number(n));

// EQUALITY -Some operations cannot be run on values of different types

// Two Equal Signs == --> Coercion
// Three Equal Signs === --> No-Coercion

let h = 40;
let i = '40';

console.log( h == i )
console.log( h === i )
