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


