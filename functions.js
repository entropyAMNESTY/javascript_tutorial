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

// Arrow Syntax
// shorter and no binding of this keyword

function Person() {
    this.name = 'Wally';
}

let user = new Person();

//Example This keyword
function Person() {
    this.firstName = 'Wally';
    let scope = this;
    this.display = setInterval(() => {
        console.log(scope === this);
    }, 1000);
}

let smuser = new Person();

//toLowerCase() - Method
let sentenceOriginal = 'easy EWfdsf  awdas ASAsasaSA sa sa';
let sentenceLower = sentenceOriginal.toLowerCase();
sentenceLower;

// does not alter original string

console.log(typeof sentenceOriginal);
// --> string

// Array.from()-Method

// Array.from(arrayLikeObject, Optional: map, this)

let arrayLike = 'woof';
console.log(Array.from(arrayLike));
// --> Output: ['w','o','o','f']

let arr = ['dog', 'fish'];
function handler(animal) {
    return `A ${animal} went walking`;
}

console.log(Array.from(arr, handler));

//forEach is only available for arrays so transforming makes sense

// indexOf(searchItem, startingPoint) || Arrays || Strings

// let arr = ['1st element', '2nd element', '3rd element'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// console.log(arr.length);

// last element of an array
// console.log(arr[arr.length - 1]);

const anima = ['war', 'sar', 'kor', 'sur', 'lus'];

console.log(anima.indexOf('sar'));
console.log(anima.indexOf('lus'));
console.log(anima.indexOf('jos'));

//-1 --> not found --> comparison with triple equal

console.log(anima.indexOf('kor', 3));

// not found --> -1

// indexOf() -- Strings

let sentence = 'Hello friend, the universe welcomes you';
console.log(typeof sentence);

let n = sentence.indexOf('welcomes');
n;

// --> 27

const STEN =
    'arer dfsfssjbdghu ngsuidusfiusnf fiwjjwf cool. sansdiofnq  fidisufn iugaidg  iofdniosafnia cool';

let search = 'cool';
let firstTime = STEN.indexOf(search);
firstTime;

// --> 41

let secondTime = STEN.indexOf(search, firstTime + 1);
secondTime;
// --> 91

const word = 'HabuGabu';
console.log(word.indexOf('Gabu'));
// --> 4

const smor = 'Red Rob';

// if(smor.indexOf('red') == false ) {
//     console.log('this is the correct answer')
// } else {
//     console.log('this is wrong')
// }

//--> false || while being right --> -1 doesnt translate to false

if (smor.indexOf('red') == -1) {
    console.log('this is the correct answer');
} else {
    console.log('this is wrong');
}

// we use -1 instead of flase to work around the issue
