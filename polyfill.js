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

Array.prototype.foarEach = function (callback, argThis) {
    // check wether the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(
            callback + ' is not a function'
        );
    }
    //we can continue our code here
    console.log('yay, we can continue');
};

let arr = ['milk', 'honey', 'sugar'];
arr.foarEach(function () {});

// Array.prototype.forEach = function(callback, thisArg) {...}
// callback: I  --> item    II  --> index   III --> array
