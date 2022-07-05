// Arrays and Loops
// Array stores multiple values
// OBJECTS are identified by {}
// Arrays are identified by [] --> special kind of objects
// both are complex datatypes in JS + functions

let a = [];
typeof a;
// --> Object

let numbers = [1, 3, 5, 7];
numbers;

numbers[0];
// --> 1 referencing location in memory, which is away x positions from the reference point
// ARRAYS do not have key:value pairs --> they have SINGULAR PIECES OF DATA

// Arrays are objects, so they can contain objects as well
// they have a length property --> first value is stored under they key '0'

let letters = ['a'];
letters.push('b');
