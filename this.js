// this || defined by execution context
// Interpreter evaluates line by line, so THIS changes

// Execution Contexts || I Global II Functional EC
// Global -- only one global execution context within a program
// Any Code not within a function --> creates a global Object --> THIS is set to this :)

// Functional -- new execution context is created whenever a function is invoked

function one() {
    console.log('this is inside function 1');
    two();
    console.log('this is still inside function 1');
}

function two() {
    console.log('this is inside function 2');
}

one();
two();

function yo() {
    let name = 'Wally';
    name = updateName();
    console.log(
        `This is the name that has been executed: ${name}`
    );
}

function updateName() {
    return 'John';
}

yo();

// --> returns John

// Execution Process || Creation Process --> I Lexical Environment --> {scope} -- II
{
    {
        let x = 'smog';
        {
            console.log(x);
        }
    }
}

// I Lex-Env: I Record -- II Outer Environment -- III this-binding
// II Variable-Environment --> difference var stored

let a = 10;
const b = 20;
var c;

function add(d, e) {
    var f = 30;
    return d + e + f;
}

c = add(2, 3);
c;
//-->35

//this is set to the closest parent object, when used within an object

let bat = {
    name: 'Battery',
    woof: function () {
        console.log(`${this.name} goes tzar`);
    },
    sisterBat: {
        name: 'Duracel',
        woof: function () {
            console.log(`${this.name} goes tzarrrrrrrrrrr`);
        },
    },
};

bat.woof();

// --> Battery goes tzar

// let bat = {
//     name: 'Battery',
//     woof: function () {
//         console.log(`${this.name} goes tzar`);
//     },
//     sisterBat: {
//         name: 'Duracel',
//         woof: function () {
//             console.log(`${this.name} goes tzarrrrrrrrrrr`);
//         },
//     },
// };

// bat.sisterBat.woof();

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    console.log(this);
}

// --> Window Object

let usr = {
    balance: 0,
    show: function (fname, lname, age) {
        console.log(
            `${fname} ${lname} is ${age} old and has a balance of ${this.balance}`
        );
    },
};

let topupBalance = {
    balance: 100,
};

usr.show.call(topupBalance, 'John', 'Smaee', 21);

let bindUsr = usr.show.bind(topupBalance);

bindUsr('John', 'Doe', 35);
