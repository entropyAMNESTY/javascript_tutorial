// New method or new object use polyfills to maintain functionality over older browsers

// Browsers --> main functionality: present the resource you choose
// URI -- Uniform Resource Identifier
// http://www.mySite.com/index.html <PROTOCOL> . <SERVER NAME> . <RESOURCE>

// BABEL == POLYFILL

// POLYFILL -- Piece of Code that provides a fallback
// Build own Polyfill - forEach-method

Array.prototype.forEach != undefined; // --> true

// forEach --> loop through array + pass it a callback function
// callback-function --> is only executed after another function has finished executing
// Two main arguments of a callback
// I    --  Current item in the loop
// II    -- Index of that item

//forEach

let arr1 = ['milk', 'honey', 'sugar'];
let arr2 = [];

arr1.forEach((item, index) => {
    arr2.push(`${item} has been added as number ${index}`);
});

arr2;

// Custom forEach-Polyfill
Array.prototype.forEach = function (callback, argThis) {
    // check wether the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(
            callback + ' is not a function'
        );
    }
    //we can continue our code here
    let len = this.length;

    // Loop through our Array
    for (var i = 0; i < len; i++) {
        //callback goes here | three arguments
        // Array.prototype.forEach = function(callback, thisArg) {...}
        // callback: I  --> item    II  --> index   III --> array
        callback.call(argThis, this[i], i, this);
    }
};

let arr = ['milk', 'honey', 'sugar'];
arr.forEach(function (item, index, argThis) {
    // console.log(item, index, argThis);
    console.log(this);
}, arr);
// --> this refers to our array now

// Output --> milk 0 (3) ['milk', 'honey', 'sugar']

//Standard forEach-Method to compare
// This refers to the Object it is pointing to

// arrExample = ['dog', 'cat', 'mouse'];
// forEach function, called as a method
// arrExample.forEach(callback(){})
// callback --> this used in these brackets refers to the arrExample
// when you have a function that is not called as a method, then that function will be a method of the WINDOW OBJECT

// call() --> call a function / method and define what this refers to
//
let foo = function () {
    console.log(this);
};

// this refers to the window-object
let bar = {};
foo.call(bar);
