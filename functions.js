// Block of Code you can save and re-use later
// it's not automatically run, you have to call it to invoke it

// ()
function test(name) {
    //block of code
    alert(`Hi ${name}`);
}

// Run a function: invoking

test('erin');

function add(a, b) {
    return a + b;
    let c = 10;
    let d = 20;
}

console.log(add(5, 10));

// --> 15
// return --> no value --> undefined

// return something over multiple lines, encapsulate within braces

// Expressions vs Declaration(see examples above)

let sayHi = function (name) {
    return `Hi ${name}`;
};

//immediately invoked function expression
//declaration

function dog() {
    let sound = 'woof';
    console.log(sound);
}

dog();

//expression

let cat = function () {
    let sound = 'meow';
    console.log(sound);
};

cat();

// timing is of importance
//declarations in its entire scope --> global scope

sayHJi('Tom');

function sayHJi(name) {
    console.log(`Hi ${name}`);
}

// --> output possible

// expressions only accessable when it is defined
sayBye('Jerry');

let sayBye = function (name) {
    console.log(`Bye ${name}`);
};

// --> not working

function bird() {
    console.log('beep');
}

let redBird = bird;

redBird();
