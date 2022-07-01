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
