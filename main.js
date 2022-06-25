// EXTERNAL JAVASCRIPT | 
//     -config
//     -models
//     -routes
//     -views
//     -public 
//         -index.html 
//         -package.json 

let t1 = +new Date;
console.log('script started at', t1);
console.log('element', document.getElementById('order-matters'))
while((new Date) < t1 + 5000) {
    //do nothing
}
console.log('script has finished running at', +new Date)

// JS ignores WHITE SPACE

/* Data Types
    -Simple | Primitive || Strings, Numbers, Boolean, Null, Undefined, Symbols
    -Complex | Objects || Objects-literals, Arrays
        Method: typeof() --> determine that data you working with

        Those have properties: length, indexOf() etc
            -except null and undefined
        Access: 
            1. Dot-Notation .   --> value.x
            2. square-bracket-Notation []   --> value[x]
*/ 

