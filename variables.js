// Create Variables having distinct names, put values in them, and store them
// Taking data, and later manipulating data is the backbone of programming
// I    DECLARE(Scope) 
// II   INITIALISE (variable is assigned space in memory,'undefined' by default)
// III  ASSIGN(put a value in the container)


// IDENTIFIERS
// name of variable, function or property
// consist of letters and numbers - can't begin with a number
// camelCase, except class and const
// const all capital letters, example:
const PI = 3.142;
// variable names are case sensitive
let myvariable = 1;
let myVariable = 2;
// Reserved keywords: alert, prompt, console... in build functionality x+100
// Before 2015 Syntax, var keyword:
var name;
// Equal Sign '=' as an assignment operator
var name = 'Wally Green';
console.log(name);
// Every variable has either local or global scope
// global --> visual everywhere
// local --> can only be used in limited situations

// let Keyword
// has scope constraints
// cannot be re-declared --> you can still change it though:
let name = 'Wally Smith';
name = 'Jimmy Brown';
console.log(name);
typeof(name);

// const keyword
// most strict way to declare a variable
// limited to the scope it's declared in
// Value cannot change, example: name = Gerald; --> error
// You also have to ASSIGN a value, it's mandatory

const name = 'Wally'

// The new keywords help us to organize our code better; var is a bit to loose, because you can reassign, redeclare the variable -- sometimes breaking things 
var a = 10;

// TRY - CATCH
const NUMBER = 10;

try {
    NUMBER = 5;
} catch (error) {
    console.log(error)
}
// --> syntax error: re-declaration of const NUMBER

// SCOPE
// Where you can use a variable
// Local vs Global --> Any variable that can only be used in specific parts has LOCAL scope
// Local Scope 2 types --> function scope vs block scope

// defined variables within a function --> LET is limited to that specific function
function test() {
    let car = 'BMW'
    console.log(car)
}

test();


// Block is a subset of functions
// Block scoped - variables are limited to the surrounding block when you use LET

{
    let animal = 'warthog';
    console.log(animal);
}

animal

// when you use var instead of let/const the variable is available outside the block
// a variable declared outside a function or block has global scope

// Globally scoped variables

let favoriteFood = 'Pizza';

function showFood() {
    console.log(favoriteFood);
}

showFood()

let a = {};
a.favoriteFoodType = 'pizza';
console.log(a.favoriteFoodType);

// Javascript with ES 6 is a block-scoped programming language

// VAR vs LET
var age = 2; // global scope
if(age > 1) {
    var humanAge = age * (100/18)
    console.log(`A ${age} year warthog is ${humanAge} years old in human terms`)
}

humanAge; // --> it's not contained in a function so its available


// Example how scoping actually works:

let age = 3; // number -- global variable
debugger
function scope() {
    let age = 'young'; // local variable -- type string
    debugger
    if (true) {
        let age = 'old'; // local block scope
        debugger
        console.log(age);
    }
}
console.log(age);
scope();






