/* double-precision 64-bit binary format --> 52 bits to store the number 
 --> We only have base-2 
 --> 64bit = 53 divisions
 --> scaled UPWARDS
*/

let a = 0.1 + 0.2;
console.log(a);

let b = Number('13');
console.log(b)

// output: 0.30000000000000004
// let c = 10, d = 10.000;
// document.write(c === d)

// 3000 = 3e3

// infinity | positive | negative

// let bigNumber = 10000e1000;

// if(bigNumber === Infinity) {
//     document.write('Lets just say this is infinity')
// }

// 1 / Infinity = 0;

// Null

// !null === true
// null === false --> false
// null == 0


// NaN --> Not a Number
// is considered to be unordered. It cannot be more or less than, cannot be equal to anything,
// even itself, which is a bit strange.

// console.log(NaN == NaN); --> false

// console.log(isNaN(NaN))