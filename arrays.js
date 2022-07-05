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

//creating arrays || 2 ways || Array Literal || Array constructor
// Array Literal

let x = [];
x;

// creating an array with values
let animals = ['dog', 'cat', 'mouse'];
console.log(animals);

let people = [
    { name: 'Wally' },
    { name: 'John' },
    { name: 'Cindy' },
];

people;

// ARRAY CONSTRUCTOR
let house = new Array('3 bedrooom', 'red', '3 bathrooms');

let numbero = new Array(5);
numbero;
// Output --> creates an array with 5 empty spots

// Array Literal approach is more simple and therefore less risky to produce unwanted errors

// PUSH & POP()
let shoppingList = ['Milk', 'Bread', 'Beer'];
shoppingList;

console.log(shoppingList[0]);
console.log(shoppingList[2]);

// overwriting values
shoppingList[0] = 'Coke';
console.log(shoppingList[0]);

//Adding items to an array
shoppingList.push('Water');
shoppingList;

// access the length property

console.log(shoppingList.length);

// Removing items from the array, always the last one
shoppingList.pop();
console.log(shoppingList);

// THREE TYPES OF ARRAY METHODS - Categories
// I MUTATOR --> alter the original Array
// II ACCESSOR --> doesn't alter the original array, creates a copy
// III ITERATORS --> loop through the original array and evaluate each value of the array

// I Example - Mutator
let o = [10, 15, 20];
console.log(o.push(90));

let original = ['blue', 'green'];
let amended = original.push('red');

original;

// Output --> affects the original array and adds the string 'red' to it

// II Example - ACCESSOR
let names = ['John', 'Wally', 'Cindy'];
let copy = names.slice(1, 3);
copy;
// Output --> Wally, Cindy
// names has kept its original values

// III Example - ITERATOR

let creatures = ['wolf', 'lion'];

const creatureIterator = creatures.map(function (
    creatureType
) {
    console.log(`We are dealing with a ${creatureType}`);
    // Output --> We are dealing with a wolf, We are dealing with a lion
    // Takes each element of an array, puts it into the callback function and it is stored into a variable 'creatureType'
});
// a callback is a function that is executed after another function has finished executing
// doesn't affect the original creatures array
