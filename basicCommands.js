// Expression -> Evaluation -> Value

// Every Expression (or function) in JS has to RETURN something

// To execute a function you have to use parentheses ()

// Every statement ends with a semicolon ;

// BOM : Browser Object Model: Window object contains all the information as top root || history, location, screen, etc  |||| window.console -> console ||||

// document.write(window.screen.height) || window.screenLeft  || var myWindow = window.open('', '', 'width=200, height=100');

// 4 categories of output you can produce in JS:
// console.log()    ||  console.info()  ||  console.warn()     || console.error


// console.assert(boolean, text); BEHAUPTUNG

// console.assert(age > 50, 'Accesss Denied. You are to young!')

// for (var i = 0; i < 5; i++) {
//     console.count('I have been called')} 

// console.dir

//console.table
console.table(['1','2', '3', '4'])

// console.group()
console.group('Dogs');
console.log('Irish Wolfhound');
console.log('Sausage Dog');

// List within a list

console.groupCollapsed('Animals');
console.group('Dogs');
console.log('Irish Wolfhound');
console.log('Sausage Dog');
console.groupEnd();
console.group('Cats');
console.log('Siamese');
console.log('Ragdoll');
console.groupEnd(); 


// Math timer
console.time('math timer');
console.log(461511561561*15151561552);
console.timeEnd('math timer'); 

// Substitutions % s - string d - integer c - css o - object

console.log('Hi %s', 'there!')

var number = 33;
var color = 'green';
console.log('You have %d %s apples', number, color)

// Template literals

console.log(`You have ${number} ${color} apples`)

// CodePen as IDE

